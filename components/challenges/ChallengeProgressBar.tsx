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
