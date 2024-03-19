import Link from 'next/link';
// export const dynamic = "force-dynamic"
import Image from 'next/image';
import LeadLoomGirl from '@/public/imgs/avatars/leadloom_girl.png';

import { Button } from '@/components/ui/button';
import JumpingAvatar from '@/components/landing/components/JumpingAvatar';
import { LeadloomGlobe } from '@/components/ui/aceternity/globe/LeadloomGlobe';
import { IntroText } from '@/components/ui/aceternity/text-generate/IntroText';
import HomePageProgramsContainer from '@/components/program/HomePageProgramsContainer';
export default async function Home() {
    return (
        <section className="w-full">
            <section className="center flex  w-full  flex-col items-center justify-center">
                <div
                    className="flex w-full flex-col items-center justify-center 
                "
                    // md:w-8/12 lg:w-2/12
                >
                    <Image
                        src={LeadLoomGirl}
                        alt="LeadLoom Girl Avatar"
                        width={500}
                        // height={500}

                        // className="w-full"
                        // style={{
                        //     objectFit: 'cover', // cover, contain, none
                        //   }}
                    />

                    <div className="bold relative bottom-10 text-center text-4xl font-extrabold tracking-tighter drop-shadow-lg md:bottom-20 md:text-8xl ">
                        LEADLOOM
                        <p className="text-xl font-bold tracking-normal md:text-2xl">
                            Earn amazing rewards by playing games
                        </p>
                    </div>
                    <Link href="/dashboard" className="animate-bounce">
                        <Button className="p-6 ">
                            <span className="flex items-center justify-center gap-1 text-lg uppercase text-white">
                                begin the journey
                            </span>
                        </Button>
                    </Link>
                    <Link href="/dashboard/faq" className="mt-4 underline">
                        Learn more
                    </Link>
                </div>
            </section>

            <div className="h-36"></div>

            <article className="flex w-full flex-col items-center justify-center text-center ">
                <IntroText />
                <section className="mt-8 ">
                    <HomePageProgramsContainer />
                </section>
            </article>
            <section>
                <LeadloomGlobe />
            </section>
            <div className="h-80"></div>
            <JumpingAvatar />
        </section>
    );
}
