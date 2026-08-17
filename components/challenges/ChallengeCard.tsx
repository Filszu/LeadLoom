'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ActiveChallenge } from '@/lib/dbOperations/getActiveChallenges'
import ChallengeProgressBar from './ChallengeProgressBar'
import { Badge } from '@/components/ui/badge'

export default function ChallengeCard({
    challenge,
    defaultOpen = true,
}: {
    challenge: ActiveChallenge
    defaultOpen?: boolean
}) {
    const [open, setOpen] = useState(defaultOpen)

    return (
        <article
            className={cn(
                'min-w-0 max-w-full overflow-hidden rounded-lg border-2 bg-gray-800 text-white shadow-lg',
                challenge.completed ? 'border-primary/60' : 'border-primary',
            )}
        >
            <button
                type="button"
                className="flex w-full items-center gap-2 px-3 py-3 text-left sm:gap-3 sm:px-5 sm:py-4"
                aria-expanded={open}
                onClick={() => setOpen((current) => !current)}
            >
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md bg-secondary sm:h-12 sm:w-12">
                    {challenge.programImg ? (
                        <Image
                            src={challenge.programImg}
                            alt={challenge.programName}
                            fill
                            className="object-cover"
                            sizes="48px"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                            <Settings className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                    )}
                </div>
                <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <h3 className="truncate text-base font-semibold tracking-tight sm:text-xl">
                            {challenge.programName}
                        </h3>
                        <Badge
                            variant={challenge.completed ? 'default' : 'warning'}
                            className="shrink-0 text-[10px] sm:text-xs"
                        >
                            {challenge.completed ? 'Completed' : 'In progress'}
                        </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground sm:text-sm">
                        {challenge.completedSteps}/{challenge.requiredSteps}{' '}
                        steps
                    </p>
                </div>
                <p className="shrink-0 text-sm font-bold text-primary sm:text-lg">
                    {challenge.points}
                    <span className="ml-0.5">PKT</span>
                </p>
                <ChevronDown
                    className={cn(
                        'h-5 w-5 shrink-0 text-muted-foreground transition-transform',
                        open && 'rotate-180',
                    )}
                />
            </button>

            {open ? (
                <div className="border-t border-white/10 px-3 py-4 sm:px-6 sm:py-5">
                    <div className="relative ml-1 border-l-2 border-dotted border-primary/40 pl-4 sm:pl-5">
                        {challenge.steps.map((step) => {
                            const isFaded =
                                step.status === 'empty' ||
                                step.status === 'declined'

                            return (
                                <div key={step.index} className="mb-4 last:mb-0 sm:mb-5">
                                    <p
                                        className={cn(
                                            'mb-1 font-semibold',
                                            isFaded
                                                ? 'text-muted-foreground'
                                                : 'text-white',
                                        )}
                                    >
                                        {step.title}
                                    </p>
                                    {step.details.length > 0 ? (
                                        <ul className="list-disc space-y-1 pl-4 sm:pl-5">
                                            {step.details.map((detail) => (
                                                <li
                                                    key={`${step.index}-${detail}`}
                                                    className={cn(
                                                        'break-words text-sm',
                                                        isFaded
                                                            ? 'text-muted-foreground'
                                                            : 'text-gray-300',
                                                    )}
                                                >
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-sm text-muted-foreground">
                                            Complete this step to continue.
                                        </p>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            ) : null}

            <div className="min-w-0 border-t border-white/10 bg-black/20 px-2 py-3 sm:px-5 sm:py-5">
                <ChallengeProgressBar steps={challenge.steps} />
            </div>
        </article>
    )
}
