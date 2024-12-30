'use client';
import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Timer, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimeLeft {
    hours: number;
    minutes: number;
    seconds: number;
}

const COUNTDOWN_KEY = 'countdown_end_time';
const HOUR_IN_MS = 60 * 60 * 1000;

export function SpecialOffer() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        hours: 1,
        minutes: 0,
        seconds: 0,
    });
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // Get saved end time from localStorage or set new one
        const savedEndTime = localStorage.getItem(COUNTDOWN_KEY);
        const endTime = savedEndTime
            ? parseInt(savedEndTime)
            : Date.now() + HOUR_IN_MS;

        if (!savedEndTime) {
            localStorage.setItem(COUNTDOWN_KEY, endTime.toString());
        }

        const interval = setInterval(() => {
            const now = Date.now();
            const difference = endTime - now;

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const hours = Math.floor(difference / (1000 * 60 * 60));
            const minutes = Math.floor(
                (difference % (1000 * 60 * 60)) / (1000 * 60),
            );
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({ hours, minutes, seconds });
            setIsAnimating(seconds % 2 === 0); // Toggle animation every second
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatNumber = (num: number) => num.toString().padStart(2, '0');

    return (
        <Card className="mx-auto w-full max-w-lg bg-gradient-to-br from-indigo-50 to-white p-8 shadow-xl dark:from-indigo-950 dark:to-slate-900">
            <div className="space-y-6">
                <div className="flex items-center justify-center space-x-2 text-indigo-600 dark:text-indigo-400">
                    <Timer className="h-6 w-6 animate-pulse" />
                    <h2 className="text-xl font-semibold">
                        Limited Time Offer
                    </h2>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                    {[
                        { label: 'Hours', value: timeLeft.hours },
                        { label: 'Minutes', value: timeLeft.minutes },
                        { label: 'Seconds', value: timeLeft.seconds },
                    ].map(({ label, value }) => (
                        <div
                            key={label}
                            className={cn(
                                'rounded-lg bg-white p-4 shadow-sm transition-transform duration-200 dark:bg-slate-800',
                                isAnimating && 'scale-105 transform',
                            )}
                        >
                            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                                {formatNumber(value)}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                {label}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="space-y-4 text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        Join now and receive your
                        <span className="font-semibold text-green-600 dark:text-green-400">
                            {' '}
                            $1 FREE bonus!
                        </span>
                    </p>

                    <Button
                        size="lg"
                        className="group w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:from-indigo-700 hover:to-purple-700"
                    >
                        <Sparkles className="mr-2 h-4 w-4 group-hover:animate-spin" />
                        Join Now
                    </Button>

                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        * Limited time offer. Terms and conditions apply.
                    </p>
                </div>
            </div>
        </Card>
    );
}
