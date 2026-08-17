'use server'

import supabase from '@/config/supaBaseClient'
import postLead from './postNewLead'
import {
    WELCOME_BONUS_OFFER_ID,
    buildWelcomeBonusLead,
    formatNicknameDate,
} from '@/lib/constants/welcomeBonus'

function normalizeReferral(value?: string | null) {
    if (!value || value === 'null' || value === 'undefined') return null
    return value.trim() || null
}

async function getWelcomeProgramId() {
    const { data } = await supabase
        .from('programms')
        .select('id')
        .eq('admitadID', WELCOME_BONUS_OFFER_ID)
        .limit(1)

    return data?.[0]?.id ?? null
}

async function getProfileId(nickname: string) {
    const { data } = await supabase
        .from('profiles')
        .select('id, nickname')
        .eq('nickname', nickname)
        .limit(1)

    return data?.[0] ?? null
}

async function getExistingWelcomeLead(
    userId: string,
    programId: string,
    stepName?: string,
) {
    let query = supabase
        .from('userLeads')
        .select('id, leadName, stepName')
        .eq('userId', userId)
        .eq('programmId', programId)

    if (stepName) {
        query = query.eq('stepName', stepName)
    }

    const { data } = await query.order('created_at', { ascending: true }).limit(1)
    return data?.[0] ?? null
}

async function postWelcomeStep({
    nickname,
    action,
    friendNickname,
}: {
    nickname: string
    action: 'step1' | 'step2'
    friendNickname?: string | null
}) {
    const profile = await getProfileId(nickname)
    if (!profile) return

    const programId = await getWelcomeProgramId()
    if (!programId) {
        console.error('Welcome bonus program not found')
        return
    }

    const existingStep = await getExistingWelcomeLead(
        profile.id,
        programId,
        action,
    )
    if (existingStep && action === 'step1') return

    const existingWelcome = await getExistingWelcomeLead(profile.id, programId)
    const leadName =
        existingWelcome?.leadName || formatNicknameDate(nickname)

    await postLead(
        buildWelcomeBonusLead({
            nickname,
            action,
            subid2: friendNickname ?? '',
            subid3: leadName,
        }),
    )
}

export default async function grantWelcomeBonus({
    nickname,
    referredBy,
}: {
    nickname: string
    referredBy?: string | null
}) {
    const userNickname = nickname.trim()
    if (!userNickname) return

    const referrer = normalizeReferral(referredBy)

    try {
        await postWelcomeStep({
            nickname: userNickname,
            action: 'step1',
            friendNickname: referrer,
        })

        if (referrer && referrer !== userNickname) {
            await postWelcomeStep({
                nickname: referrer,
                action: 'step2',
                friendNickname: userNickname,
            })
        }
    } catch (error) {
        console.error('Failed to grant welcome bonus', error)
    }
}
