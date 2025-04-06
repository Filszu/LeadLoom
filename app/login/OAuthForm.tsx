'use client' // Add this line
import { Button } from '@/components/ui/button';
import { createBrowserClient } from '@supabase/ssr';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import GoogleBtn from './GoogleBtn';

interface Props {
    btnClassName?: string;
    btnText?: string;
    btnVariant?:
        | 'outline'
        | 'default'
        | 'destructive'
        | 'secondary'
        | 'ghost'
        | 'link';
}

const OAuthForm = (props: Props) => {
    const btnClassName = props.btnClassName || '';
    const btnText = props.btnText || 'Login with google';
    const btnVariant = props.btnVariant || 'outline';

    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );

    async function googleLogin() {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${location.origin}/auth/callback`,
            },
        });

        console.log('data=========', data);
        if (error) {
            console.log('error=========', error);
        }
    }

    return (
        <>
            <GoogleBtn onClickFunction={googleLogin}></GoogleBtn>
        </>
    );
};

export default OAuthForm;