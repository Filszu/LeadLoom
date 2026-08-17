import { cn } from '@/lib/utils'
import type {
    ActiveChallengeStep,
    ChallengeStepStatus,
} from '@/lib/dbOperations/getActiveChallenges'

const STATUS_STYLES: Record<
    ChallengeStepStatus,
    { bar: string; label: string; pattern?: string }
> = {
    accepted: {
        bar: 'border-blue-600 text-white shadow-sm',
        label: 'text-slate-800',
        pattern:
            'repeating-linear-gradient(-45deg, #3b82f6 0 8px, #1d4ed8 8px 16px)',
    },
    pending: {
        bar: 'border-orange-500 text-white shadow-sm',
        label: 'text-slate-800',
        pattern:
            'repeating-linear-gradient(-45deg, #f97316 0 8px, #c2410c 8px 16px)',
    },
    declined: {
        bar: 'border-slate-300 bg-slate-100 text-slate-400',
        label: 'text-slate-400',
    },
    current: {
        bar: 'border-slate-700 bg-slate-100 text-slate-700',
        label: 'text-slate-800',
    },
    empty: {
        bar: 'border-slate-200 bg-slate-50 text-transparent',
        label: 'text-slate-400',
    },
}

export default function ChallengeProgressBar({
    steps,
}: {
    steps: ActiveChallengeStep[]
}) {
    return (
        <div className="overflow-x-auto">
            <div className="flex min-w-[280px] items-end gap-2 px-2 pt-8 sm:gap-3">
                {steps.map((step) => {
                    const style = STATUS_STYLES[step.status]
                    const showLabel =
                        step.status === 'accepted' ||
                        step.status === 'pending' ||
                        step.status === 'current'

                    return (
                        <div
                            key={step.index}
                            className="relative min-w-[4.5rem] flex-1"
                        >
                            <div
                                className={cn(
                                    'absolute -top-7 left-0 right-0 text-center text-xs font-semibold',
                                    style.label,
                                )}
                            >
                                {step.value}$
                            </div>
                            <div
                                className={cn(
                                    'flex h-12 items-center justify-center rounded-md border-2 skew-x-[-16deg]',
                                    style.bar,
                                )}
                                style={
                                    style.pattern
                                        ? { backgroundImage: style.pattern }
                                        : undefined
                                }
                            >
                                <span className="skew-x-[16deg] text-xs font-semibold sm:text-sm">
                                    {showLabel ? step.title : ''}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
