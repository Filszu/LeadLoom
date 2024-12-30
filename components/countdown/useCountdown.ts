import { useState, useEffect } from 'react';

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const COUNTDOWN_KEY = 'countdown_end_time';
const HOUR_IN_MS = 60 * 60 * 1000;

export function useCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 1, minutes: 0, seconds: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const savedEndTime = localStorage.getItem(COUNTDOWN_KEY);
    const endTime = savedEndTime ? parseInt(savedEndTime) : Date.now() + HOUR_IN_MS;
    
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
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
      setIsAnimating(seconds % 2 === 0);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { timeLeft, isAnimating };
}