import ProgramCard from '@/components/program/ProgramCard';
import { Suspense } from 'react';

import getPublicUser from '@/utils/supabase/getPublicUser';
import { redirect } from 'next/navigation';
import {
    ProgramCardSkeleton,
    ProgramCardSkeletonContainer,
} from '@/components/skeletons/skeletons';
import { publicUserSession } from '@/utils/supabase/publicUserSession';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaLocationArrow } from 'react-icons/fa';

export const revalidate = 60;

const ProgramsPage = async () => {
    // const publicUser = await getPublicUser();
    // console.log('publicuser',publicUser)

    // const userNickname = publicUser?.nickname;
    // const userId = publicUser?.id;

    // if(!userNickname) redirect('/dashboard/settings');
    // if(!userId) redirect('/login');
    const publicUser = await publicUserSession;

    const userNickname = publicUser?.nickname;
    const userId = publicUser?.id;

    return (
        <>
            <h1>Settings</h1>
            <h2>
                Hey, {userNickname ?? ''} here you can change your personal info{' '}
            </h2>
            <p></p>

            <div className="h-10"></div>

            <h1>Withdraw reward</h1>
            <h2 className="cursor-not-allowed">Withdrawal threshold: 20PLN</h2>
            <Button disabled={true} className="mr-2 p-6 cursor-not-allowed">
                <span className="flex  items-center justify-center gap-1 text-lg text-white cursor-not-allowed">
                    Withdraw
                    <FaLocationArrow size={22} />
                </span>
            </Button>

            <Suspense fallback={<ProgramCardSkeletonContainer />}></Suspense>
        </>
    );
};

export default ProgramsPage;
