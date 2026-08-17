'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ActiveChallenge } from '@/lib/dbOperations/getActiveChallenges'
import ChallengeProgressBar from './ChallengeProgressBar'

export default function ChallengeCard({
    challenge,
    defaultOpen = true,
}: {
    challenge: ActiveChallenge
    defaultOpen?: boolean
}) {
    const [open, setOpen] = useState(defaultOpen)

    return (
        <article className="overflow-hidden rounded-2xl bg-white text-slate-900 shadow-[0_12px_40px_rgba(15,23,42,0.12)]">
            <button
                type="button"
                className="flex w-full items-center gap-3 px-5 py-4 text-left"
                aria-expanded={open}
                onClick={() => setOpen((current) => !current)}
            >
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-100">
                    {challenge.programImg ? (
                        <Image
                            src={challenge.programImg}
                            alt={challenge.programName}
                            fill
                            className="object-cover"
                            sizes="48px"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center text-slate-500">
                            <Settings className="h-6 w-6" />
                        </div>
                    )}
                </div>
                <h3 className="flex-1 text-xl font-bold tracking-tight">
                    {challenge.programName}
                </h3>
                <p className="text-lg font-bold">{challenge.points} PKT</p>
                <ChevronDown
                    className={cn(
                        'h-5 w-5 text-slate-500 transition-transform',
                        open && 'rotate-180',
                    )}
                />
            </button>

            {open ? (
                <div className="border-t border-slate-100 px-6 py-5">
                    <div className="relative ml-1 border-l-2 border-dotted border-slate-300 pl-5">
                        {challenge.steps.map((step) => {
                            const isFaded =
                                step.status === 'empty' ||
                                step.status === 'declined'

                            return (
                                <div key={step.index} className="mb-5 last:mb-0">
                                    <p
                                        className={cn(
                                            'mb-1 font-bold',
                                            isFaded && 'text-slate-400',
                                        )}
                                    >
                                        {step.title}
                                    </p>
                                    {step.details.length > 0 ? (
                                        <ul className="list-disc space-y-1 pl-5">
                                            {step.details.map((detail) => (
                                                <li
                                                    key={`${step.index}-${detail}`}
                                                    className={cn(
                                                        'text-sm',
                                                        isFaded
                                                            ? 'text-slate-400'
                                                            : 'text-slate-700',
                                                    )}
                                                >
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-sm text-slate-400">
                                            Complete this step to continue.
                                        </p>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            ) : null}

            <div className="border-t border-slate-200 bg-slate-50/80 px-5 py-5">
                <ChallengeProgressBar steps={challenge.steps} />
            </div>
        </article>
    )
}
