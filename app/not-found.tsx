import JumpingAvatar from '@/components/landing/components/JumpingAvatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
    return (
        <section className="flex h-screen flex-col items-center justify-center ">
            <h1 className='mb-8'>404 | Not Found 😿</h1>
            <JumpingAvatar />
            <Link href="/">
                <Button className="my-2 p-6">
                    <span className="flex items-center justify-center gap-1 text-lg">
                        Return Home
                    </span>
                </Button>
            </Link>
        </section>
    );
}
