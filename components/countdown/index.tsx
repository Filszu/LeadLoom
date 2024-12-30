'use client';
import {  useState } from 'react';
import { Card } from '@/components/ui/card';
import { Timer } from 'lucide-react';
import { TimeDisplay } from './TimeDisplay';
import { JoinButton } from './JoinButton';
import { useCountdown } from './useCountdown';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function CountdownTimer() {
  const { timeLeft, isAnimating } = useCountdown();
  const [showNeon, setShowNeon] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowNeon(true);
  //   }, 10000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="w-full pb-12 md:pb-24 relative">
      {/* <div className={cn(
        'absolute inset-0 -m-1 rounded-2xl transition-all duration-1000',
        showNeon ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse opacity-100' : 'opacity-0'
      )} /> */}
      <Card className={cn(
        "w-full bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950 dark:to-slate-900 shadow-2xl relative",
        showNeon && "m-1"
      )}>
        <div className="max-w-7xl mx-auto p-6 md:p-12">
          <div className="space-y-8 md:space-y-12">
            <div className="flex items-center justify-center space-x-3">
              <Timer className="w-8 h-8 md:w-10 md:h-10 text-indigo-600 dark:text-indigo-400 animate-pulse" />
              <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                Offer Ends In
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-8">
              {[
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map(({ label, value }) => (
                <TimeDisplay
                  key={label}
                  label={label}
                  value={value}
                  isAnimating={isAnimating}
                />
              ))}
            </div>

            <div className="text-center space-y-6">
              <div className="max-w-md mx-auto">
                <Link href="/sign-up?promocode=tiktok_bonus" className="underline">
                <JoinButton />
                </Link>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                * Terms and conditions apply.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}