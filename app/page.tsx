import LandingPage from '@/components/landing/LandingPage';
import supabase from '@/config/supaBaseClient';
import { cookies } from 'next/headers';
import Link from 'next/link';
// export const dynamic = "force-dynamic"
import Image from 'next/image';
import LeadLoomGril from '@/public/imgs/avatars/leadloom_girl.png';


import { Button } from '@/components/ui/button';
import JumpingAvatar from '@/components/landing/components/JumpingAvatar';
export default async function Home() {
    return (
        <section className='w-full'>
        <section className="center flex w-full flex-col  justify-center h-screen">
            <div className="flex flex-col items-center justify-center">
                <Image
                    src={LeadLoomGril}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className=""
                />

                <div className="bold relative bottom-20 text-center text-8xl font-extrabold tracking-tighter drop-shadow-lg ">
                    LEADLOOM
                    <p className="text-2xl font-bold tracking-normal">
                        Earn amazing rewards by playing games
                    </p>
                </div>
                <Link href="/dashboard" className="animate-bounce">
                    <Button className="p-6">
                        <span className="flex items-center justify-center gap-1 text-lg text-white">
                            begin the journey
                        </span>
                    </Button>
                </Link>
            </div>

            

            
        </section>
        <JumpingAvatar />
        </section>
    );
}
