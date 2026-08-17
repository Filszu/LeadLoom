import Link from 'next/link'
import getActiveChallenges from '@/lib/dbOperations/getActiveChallenges'
import ChallengeCard from './ChallengeCard'

export default async function ActiveChallengesSection({
    userId,
}: {
    userId: string
}) {
    const challenges = await getActiveChallenges(userId)
    const firstOpenIndex = Math.max(
        challenges.findIndex((challenge) => !challenge.completed),
        0,
    )

    return (
        <section className="mb-10 mt-4 w-full">
            <h1 className="mb-4">Challenges</h1>

            {challenges.length === 0 ? (
                <p className="text-muted-foreground">
                    No challenges yet.{' '}
                    <Link href="/dashboard/programs" className="link-underline">
                        Start a program
                    </Link>
                </p>
            ) : (
                <div className="space-y-5">
                    {challenges.map((challenge, index) => (
                        <ChallengeCard
                            key={challenge.programId}
                            challenge={challenge}
                            defaultOpen={index === firstOpenIndex}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}
