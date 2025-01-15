import Link from 'next/link';
// export const dynamic = "force-dynamic"
import Image from 'next/image';
// import LeadLoomGirl from '@/public/imgs/avatars/leadloom_girl.png';

import { Button } from '@/components/ui/button';
import JumpingAvatar from '@/components/landing/components/JumpingAvatar';
import OAuthForm from '../login/OAuthForm';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {createCookie,  getCookie } from '@/utils/appCookies';
import { Cookie } from '@/types';
import { cookies } from 'next/headers';
import Ref from './ref';
import { IntroText } from '@/components/ui/aceternity/text-generate/IntroText';
import HomePageProgramsContainer from '@/components/program/HomePageProgramsContainer';
import LeadLoomShrek from '@/public/imgs/avatars/leadloom_shrek.png';
type Props = {
    searchParams: { [key: string]: string | string[] | undefined };
};

export default async function signUpPage({ searchParams }: Props) {
    const promocode = searchParams?.promocode ?? '';

    if (promocode && promocode !== '') {
        // await createCookie({ name: 'promocode', value: promocode } as Cookie);
        // it has moved ot ref txt
    }

    const cookiePromoCode = await getCookie('promocode');

    console.log('cookiePromoCode🍪', cookiePromoCode);

    return (
        <section className="w-full">
            <section className="center flex  w-full  flex-col items-center justify-center">
                <div
                    className="flex w-full flex-col items-center justify-center 
                "
                    // md:w-8/12 lg:w-2/12
                >
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

                    <section>
                        <h2 className="text-center text-lg font-bold uppercase">
                            start now!
                        </h2>
                        <OAuthForm
                            // btnClassName='border-2 border-primary'
                            btnClassName="text-gray-950"
                            btnVariant="default"
                        />
                        <Label className="text-center " htmlFor="promocode">
                            <p className="mt-3 text-center">promo code:</p>
                        </Label>
                        <Input
                            className="my-2 rounded-md border bg-inherit px-4 py-6 text-center uppercase"
                            name="promocode"
                            placeholder="promo code"
                            // value={promocode ?? ''}
                            // defaultValue={promocode ?? ''}
                            defaultValue={promocode ?? ''}
                            disabled={!!promocode}
                        />

                        <Ref code={promocode.toString()} />
                    </section>
                    {/* <Link href="/dashboard/faq" className="mt-4 underline">
                        Learn more
                    </Link> */}
                </div>
            </section>
            <div className="h-36"></div>
            <article className="flex w-full flex-col items-center justify-center text-center ">
                <IntroText />
                <section className="mt-8 ">
                    <HomePageProgramsContainer />
                </section>
            </article>
            <div className="h-80"></div>
            <JumpingAvatar />
        </section>
    );
}
