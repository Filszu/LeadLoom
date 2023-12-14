'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';

interface Props {
    signIn: () => void;
    signUp?: () => void;
}

const OAuthForm = async(props: Props) => {
    return (
        // <Button
        //     className="w-full p-6"
        //     variant={'outline'}
        //     onClick={() =>  props.signIn()}
        // >
        //     <span className="flex items-center justify-center gap-1 text-lg text-white">
        //         <FaGoogle />
        //         Login with google
        //     </span>
        // </Button>
        <form action={props.signIn}>
        <Button className="w-full p-6" variant={'outline'} type="submit">
            <span className="flex items-center justify-center gap-1 text-lg text-white">
                <FaGoogle />
                Login with google
            </span>
        </Button>
        </form>
    );
};

export default OAuthForm;
