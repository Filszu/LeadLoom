import ProgramCard from '@/components/program/ProgramCard';
import { Suspense } from 'react';

import getPublicUser from '@/utils/supabase/getPublicUser';
import { redirect } from 'next/navigation';
import { ProgramCardSkeleton, ProgramCardSkeletonContainer } from '@/components/skeletons/skeletons';

export const revalidate = 60;

const ProgramsPage = async () => {
    // const publicUser = await getPublicUser();
    // console.log('publicuser',publicUser)

    // const userNickname = publicUser?.nickname;
    // const userId = publicUser?.id;

    // if(!userNickname) redirect('/dashboard/settings'); 
    // if(!userId) redirect('/login');
    
    return (
        <>
            <h1>Settings</h1>
            <h2>Join to program and earn $$$*</h2>
            <p></p>

            
            
            <Suspense fallback={<ProgramCardSkeletonContainer/>}>
               
            </Suspense>
        </>
    );
};

export default ProgramsPage;
