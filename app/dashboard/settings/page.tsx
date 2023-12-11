import ProgramCard from '@/components/program/ProgramCard';
import { Suspense } from 'react';

import getPublicUser from '@/utils/supabase/getPublicUser';
import { redirect } from 'next/navigation';
import { ProgramCardSkeleton, ProgramCardSkeletonContainer } from '@/components/skeletons/skeletons';
import { publicUserSession } from '@/utils/supabase/publicUserSession';


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
            <h2>Hey, {userNickname??""} here you can change your personal info </h2>
            <p></p>

            <div className='h-10'></div>

            <h1>Withdraw reward</h1>
            <h2>Withdrawal threshold: 20PLN</h2>

            
            
            
            <Suspense fallback={<ProgramCardSkeletonContainer/>}>
               
            </Suspense>
        </>
    );
};

export default ProgramsPage;
