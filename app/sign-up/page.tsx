

import Link from 'next/link';
// export const dynamic = "force-dynamic"
import Image from 'next/image';
import LeadLoomGirl from '@/public/imgs/avatars/leadloom_girl.png';

import { Button } from '@/components/ui/button';
import JumpingAvatar from '@/components/landing/components/JumpingAvatar';
import OAuthForm from '../login/OAuthForm';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import createCookie, { getCookie } from '@/utils/appCookies';
import { Cookie } from '@/types';
import { cookies } from 'next/headers';
import Ref from './ref';


type Props = {
    searchParams: { [key: string]: string | string[] | undefined };
};

export default async function signUpPage({ searchParams }: Props) {
    const promocode = searchParams?.promocode ?? '';

    
    if (promocode && promocode !== '') {
        
        // await createCookie({ name: 'promocode', value: promocode } as Cookie);
    }

    const cookiePromoCode = await getCookie('promocode');

    console.log('cookiePromoCode', cookiePromoCode);

    return (
        <section className="w-full">
            <section className="center flex h-screen w-full  flex-col items-center justify-center">
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
            <div className="h-80"></div>
            <JumpingAvatar />
        </section>
    );
}
