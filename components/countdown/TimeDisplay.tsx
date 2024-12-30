import { cn } from '@/lib/utils';

interface TimeDisplayProps {
  label: string;
  value: number;
  isAnimating: boolean;
}

export function TimeDisplay({ label, value, isAnimating }: TimeDisplayProps) {
  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div
      className={cn(
        'p-6 md:p-8 rounded-xl bg-white dark:bg-slate-800 shadow-lg transition-all duration-200',
        isAnimating && 'transform scale-105'
      )}
    >
      <div className="text-4xl md:text-6xl font-bold text-indigo-600 dark:text-indigo-400">
        {formatNumber(value)}
      </div>
      <div className="text-sm md:text-lg text-gray-500 dark:text-gray-400 font-medium">
        {label}
      </div>
    </div>
  );
}