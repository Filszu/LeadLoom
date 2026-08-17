import supabase from '@/config/supaBaseClient'

export type ChallengeStepStatus =
    | 'accepted'
    | 'pending'
    | 'declined'
    | 'current'
    | 'empty'

export type ActiveChallengeStep = {
    index: number
    title: string
    details: string[]
    status: ChallengeStepStatus
    value: number
}

export type ActiveChallenge = {
    programId: string
    programName: string
    programImg: string | null
    points: number
    requiredSteps: number
    completedSteps: number
    steps: ActiveChallengeStep[]
}

type ProgramJoin = {
    programName: string | null
    programID: string | null
    img: string | null
    pros: string[] | null
    steps: number | null
    min_steps: number | null
    cpaUser: number | null
}

type UserLeadRow = {
    id: string
    created_at: string
    programmId: string | null
    leadName: string | null
    stepName: string | null
    status: string | null
    value: number | null
    user_value_points: number | null
    programms: ProgramJoin | ProgramJoin[] | null
}

const STEP_HEADER = /^(step\s*(\d+)\s*[:.\-]?\s*)(.*)$/i

function unwrapProgram(programms: UserLeadRow['programms']): ProgramJoin | null {
    if (!programms) return null
    return Array.isArray(programms) ? programms[0] ?? null : programms
}

function splitProsIntoSteps(pros: string[] | null, stepCount: number): string[][] {
    const buckets: string[][] = Array.from({ length: stepCount }, () => [])
    const items = pros?.filter(Boolean) ?? []

    if (stepCount === 0 || items.length === 0) return buckets

    const hasHeaders = items.some((item) => STEP_HEADER.test(item))

    if (hasHeaders) {
        let current = 0
        for (const item of items) {
            const match = item.match(STEP_HEADER)
            if (match) {
                current = Math.min(Math.max(Number(match[2]) - 1, 0), stepCount - 1)
                const rest = match[3]?.trim()
                if (rest) buckets[current].push(rest)
            } else {
                buckets[current].push(item)
            }
        }
        return buckets
    }

    const perStep = Math.ceil(items.length / stepCount)
    items.forEach((item, index) => {
        const bucketIndex = Math.min(Math.floor(index / perStep), stepCount - 1)
        buckets[bucketIndex].push(item)
    })

    return buckets
}

function matchesStepName(stepName: string | null, stepIndex: number) {
    if (!stepName) return false
    const normalized = stepName.toLowerCase().replace(/\s+/g, '')
    const stepNumber = String(stepIndex + 1)
    return (
        normalized === `step${stepNumber}` ||
        normalized === stepNumber ||
        normalized.includes(`step${stepNumber}`)
    )
}

function mapLeadStatus(status?: string | null): ChallengeStepStatus {
    const value = (status ?? '').toLowerCase()
    if (value === 'accepted' || value === 'paidout') return 'accepted'
    if (value === 'pending') return 'pending'
    if (value === 'declined') return 'declined'
    return 'empty'
}

function isActiveChallenge(steps: ActiveChallengeStep[], requiredSteps: number) {
    const acceptedCount = steps.filter((step) => step.status === 'accepted').length
    const hasPending = steps.some((step) => step.status === 'pending')
    const hasProgress = steps.some(
        (step) => step.status === 'accepted' || step.status === 'pending',
    )

    if (!hasProgress) return false
    if (requiredSteps > 0 && acceptedCount >= requiredSteps && !hasPending) {
        return false
    }

    return true
}

export default async function getActiveChallenges(userId: string) {
    const { data, error } = await supabase
        .from('userLeads')
        .select(
            'id, created_at, programmId, leadName, stepName, status, value, user_value_points, programms(programName, programID, img, pros, steps, min_steps, cpaUser)',
        )
        .eq('userId', userId)
        .order('created_at', { ascending: false })

    if (error || !data) {
        console.error(error)
        return [] as ActiveChallenge[]
    }

    const leads = data as unknown as UserLeadRow[]
    const grouped = new Map<string, UserLeadRow[]>()

    for (const lead of leads) {
        if (!lead.programmId) continue
        const current = grouped.get(lead.programmId) ?? []
        current.push(lead)
        grouped.set(lead.programmId, current)
    }

    const challenges: ActiveChallenge[] = []

    for (const [programId, programLeads] of grouped) {
        const latestLeadName = programLeads[0]?.leadName
        const challengeLeads = latestLeadName
            ? programLeads.filter((lead) => lead.leadName === latestLeadName)
            : programLeads

        const program = unwrapProgram(challengeLeads[0]?.programms)
        if (!program) continue

        const requiredSteps = Math.max(
            program.steps ?? program.min_steps ?? challengeLeads.length,
            1,
        )
        const detailsByStep = splitProsIntoSteps(program.pros, requiredSteps)
        const chronological = [...challengeLeads].sort(
            (a, b) =>
                new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
        )
        const hasNamedSteps = chronological.some((lead) =>
            matchesStepName(lead.stepName, 0) ||
            Boolean(lead.stepName?.match(/\d+/)),
        )

        const steps: ActiveChallengeStep[] = Array.from(
            { length: requiredSteps },
            (_, index) => {
                const namedLead = chronological.find((lead) =>
                    matchesStepName(lead.stepName, index),
                )
                const lead = hasNamedSteps ? namedLead : chronological[index]
                const status = mapLeadStatus(lead?.status)

                return {
                    index,
                    title: `Step ${index + 1}`,
                    details: detailsByStep[index] ?? [],
                    status,
                    value: lead?.value ?? 0,
                }
            },
        )

        const firstEmptyIndex = steps.findIndex((step) => step.status === 'empty')
        if (firstEmptyIndex >= 0) {
            steps[firstEmptyIndex].status = 'current'
        }

        if (!isActiveChallenge(steps, requiredSteps)) continue

        const earnedPoints = challengeLeads.reduce(
            (sum, lead) => sum + (lead.user_value_points ?? 0),
            0,
        )

        challenges.push({
            programId,
            programName: program.programName || program.programID || 'Challenge',
            programImg: program.img,
            points: Math.round(earnedPoints || (program.cpaUser ?? 0) * 1000),
            requiredSteps,
            completedSteps: steps.filter((step) => step.status === 'accepted').length,
            steps,
        })
    }

    return challenges
}
