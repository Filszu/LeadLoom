'use client';
import { Button } from '@/components/ui/button';
import { createBrowserClient } from '@supabase/ssr';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';

interface Props {
    signIn: () => void;
    signUp?: () => void;
}

const OAuthForm = async () =>
    // props: Props
    {
        const supabase = createBrowserClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        );

        async function googleLogin() {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    // redirectTo: "/auth/callback",
                    redirectTo: "/auth/callback",
                },
            });

            console.log('data=========', data);
            if (error) {
                console.log('error=========', error);
            }
        }
        return (
            <>
                <Button
                    className="w-full p-6"
                    variant={'outline'}
                    onClick={() => googleLogin()}
                >
                    <span className="flex items-center justify-center gap-1 text-lg text-white">
                        <FaGoogle />
                        Login with google
                    </span>
                </Button>

                {/* <form action={props.signIn}>
                <Button
                    className="w-full p-6"
                    variant={'outline'}
                    type="submit"
                >
                    <span className="flex items-center justify-center gap-1 text-lg text-white">
                        <FaGoogle />
                        Login with google
                    </span>
                </Button>
            </form> */}
            </>
        );
    };

export default OAuthForm;
