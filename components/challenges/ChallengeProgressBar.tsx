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
        bar: 'border-primary text-primary-foreground shadow-sm',
        label: 'text-primary',
        pattern:
            'repeating-linear-gradient(-45deg, hsl(var(--primary)) 0 8px, hsl(142 64% 28%) 8px 16px)',
    },
    pending: {
        bar: 'border-orange-400 text-white shadow-sm',
        label: 'text-orange-400',
        pattern:
            'repeating-linear-gradient(-45deg, #fb923c 0 8px, #c2410c 8px 16px)',
    },
    declined: {
        bar: 'border-muted bg-muted/40 text-muted-foreground',
        label: 'text-muted-foreground',
    },
    current: {
        bar: 'border-primary bg-secondary text-foreground',
        label: 'text-foreground',
    },
    empty: {
        bar: 'border-muted bg-muted/20 text-transparent',
        label: 'text-muted-foreground',
    },
}

export default function ChallengeProgressBar({
    steps,
}: {
    steps: ActiveChallengeStep[]
}) {
    return (
        <div className="min-w-0 overflow-x-auto pb-1">
            <div className="flex min-w-full items-end gap-1.5 px-3 pt-6 sm:min-w-[280px] sm:gap-3 sm:px-4 sm:pt-8">
                {steps.map((step) => {
                    const style = STATUS_STYLES[step.status]
                    const showLabel =
                        step.status === 'accepted' ||
                        step.status === 'pending' ||
                        step.status === 'current'

                    return (
                        <div
                            key={step.index}
                            className="relative min-w-[2.6rem] flex-1 sm:min-w-[4.5rem]"
                        >
                            <div
                                className={cn(
                                    'absolute -top-5 left-0 right-0 text-center text-[10px] font-semibold sm:-top-7 sm:text-xs',
                                    style.label,
                                )}
                            >
                                {step.value}$
                            </div>
                            <div
                                className={cn(
                                    'flex h-9 items-center justify-center rounded-md border-2 skew-x-[-10deg] sm:h-12 sm:skew-x-[-16deg]',
                                    style.bar,
                                )}
                                style={
                                    style.pattern
                                        ? { backgroundImage: style.pattern }
                                        : undefined
                                }
                            >
                                <span className="skew-x-[10deg] text-[10px] font-semibold sm:skew-x-[16deg] sm:text-sm">
                                    {showLabel ? (
                                        <>
                                            <span className="sm:hidden">
                                                {step.index + 1}
                                            </span>
                                            <span className="hidden sm:inline">
                                                {step.title}
                                            </span>
                                        </>
                                    ) : null}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
