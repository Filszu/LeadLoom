import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export function JoinButton() {
  return (
    <Button
      size="lg"
      className="w-full h-14 text-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg group"
    >
      <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
      Join Now
    </Button>
  );
}