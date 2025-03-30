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
import { ReviewsContainer } from '@/components/review/reviews-container';
import { SpecialOffer } from '@/components/countdown/SpecialOfer';
import { CountdownTimer } from '@/components/countdown';
import { getCookie, createCookie } from '@/utils/appCookies';
import { Cookie } from '@/types';
import Ref from './sign-up/ref';

type Props = {
    searchParams: { [key: string]: string | string[] | undefined };
};
export default async function Home({ searchParams }: Props) {
    const promocode = searchParams?.promocode ?? '';
    const ref = searchParams?.ref ?? '';

    let lastReferer = ref ?? promocode ?? '';

    const cookiePromoCode = await getCookie('promocode');

    console.log('cookiePromoCode🍪', cookiePromoCode);

    return (
        <section className="w-full">
            <section className="center flex  w-full  flex-col items-center justify-center">
                <div
                    className="flex w-full flex-col items-center justify-center 
                "
                >
                    <div className="h-10"></div>
                    <div className="relative">
                        <Image
                            src={LeadLoomShrek}
                            alt="LeadLoom Girl Avatar"
                            width={500}
                    
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
                    <Link
                        href="/dashboard/faq"
                        className="mt-4 hidden underline md:block"
                    >
                        Learn more
                    </Link>
                    <div className="lg:h-45 h-14 md:h-40"></div>
                    <h2 className="mb-6  flex-wrap content-center justify-center gap-2 text-center text-3xl font-bold sm:text-4xl md:flex">
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
                    <Link
                        href="https://discord.gg/D9GDbDKDpY"
                        target="_blank"
                        className=""
                    >
                        <Button className="bg-blue-600 p-6">
                            <span className="flex items-center justify-center gap-1 text-lg uppercase text-white">
                                JOIN NOW
                            </span>
                        </Button>
                    </Link>

                    <div className="h-20 md:hidden"></div>

                    <Link
                        href="/dashboard/faq"
                        className="mt-4 underline md:hidden"
                    >
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

            <div className="h-20"></div>

            <section className="flex w-full flex-col items-center justify-center px-4 text-center">
                <h1 className="animate-pulse bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text py-2 text-center text-4xl font-black text-transparent md:py-4 md:text-7xl">
                    JOIN NOW!
                </h1>
                <p className="text-2xl text-gray-600 dark:text-gray-300 md:text-4xl">
                    and receive your
                    <span className="font-semibold text-green-600 dark:text-green-400">
                        {' '}
                        $1 FREE bonus!
                    </span>
                </p>
                <div className="h-10"></div>
                <section className="flex w-11/12 md:w-6/12 ">
                    <CountdownTimer />
                </section>
            </section>

            <section className="w-full">
                <ReviewsContainer />
            </section>
            <div className="h-40"></div>
            <JumpingAvatar />
            <Ref code={promocode.toString()} />
        </section>
    );
}
