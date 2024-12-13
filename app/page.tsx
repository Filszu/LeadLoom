import Link from 'next/link';
// export const dynamic = "force-dynamic"
import Image from 'next/image';
import LeadLoomGirl from '@/public/imgs/avatars/leadloom_girl.png';
import LeadLoomShrek from '@/public/imgs/avatars/leadloom_shrek.png';

import { Button } from '@/components/ui/button';
import JumpingAvatar from '@/components/landing/components/JumpingAvatar';
import { LeadloomGlobe } from '@/components/ui/aceternity/globe/LeadloomGlobe';
import { IntroText } from '@/components/ui/aceternity/text-generate/IntroText';
import HomePageProgramsContainer from '@/components/program/HomePageProgramsContainer';
import { SiDiscord, SiStarship } from 'react-icons/si';
export default async function Home() {
    return (
        <section className="w-full">
            <section className="center flex  w-full  flex-col items-center justify-center">
                <div
                    className="flex w-full flex-col items-center justify-center 
                "
                    // md:w-8/12 lg:w-2/12
                >
                    {/* <Image
                        src={LeadLoomGirl}
                        alt="LeadLoom Girl Avatar"
                        width={500}
                        // height={500}

                        // className="w-full"
                        // style={{
                        //     objectFit: 'cover', // cover, contain, none
                        //   }}
                    /> */}

                    <div className="h-10"></div>
                    <div className="relative">
                        <Image
                            src={LeadLoomShrek}
                            alt="LeadLoom Girl Avatar"
                            width={500}
                            // height={500}

                            // className="w-full"
                            // style={{
                            //     objectFit: 'cover', // cover, contain, none
                            //   }}
                        ></Image>
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white via-white/50 to-transparent blur-lg md:h-6"></div>
                    </div>
                    <div className="bold relative bottom-10 text-center text-5xl font-extrabold tracking-tighter drop-shadow-lg md:bottom-20 md:text-8xl ">
                        LEADLOOM
                        {/* <p className="absolute left-0 top-full rotate-180 transform font-bold opacity-50">
                        LEADLOOM
                        </p> */}
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

                    <div className="lg:h-60 h-40"></div>
                    <h2 className="mb-6  content-center justify-center gap-2 text-center text-3xl font-bold sm:text-4xl md:flex flex-wrap">
                        <div className="flex items-center justify-center">
                            <span className="flex items-center">J</span>
                            <SiStarship size={30} />
                            <span className="flex items-center">IN</span>
                        </div>
                        <div>our Discord server</div>
                        <div className="flex content-center justify-center">
                            <SiDiscord size={40} />
                        </div>
                    </h2>
                    <Link href="https://discord.gg/D9GDbDKDpY" target='_blank' className="">
                        <Button className="p-6 bg-blue-600">
                            <span className="flex items-center justify-center gap-1 text-lg uppercase text-white">
                               JOIN NOW
                            </span>
                        </Button>
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
