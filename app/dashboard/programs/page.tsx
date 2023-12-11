import ProgramCard from '@/components/program/ProgramCard';
import { Suspense } from 'react';
import ProgrammsContainer from './ProgrammsContainer';
import getPublicUser from '@/utils/supabase/getPublicUser';
import { redirect } from 'next/navigation';
import { ProgramCardSkeleton, ProgramCardSkeletonContainer } from '@/components/skeletons/skeletons';
import { publicUserSession } from '@/utils/supabase/publicUserSession';

export const revalidate = 3600;

const ProgramsPage = async () => {
    
    const publicUser = await publicUserSession;
    // console.log('publicuser',publicUser)

    const userNickname = publicUser?.nickname;
    const userId = publicUser?.id;

    if(!userNickname) redirect('/dashboard/settings'); 
    if(!userId) redirect('/login');
    
    return (
        <>
            <h1>Programs</h1>
            <h2>Join to program and earn $$$*</h2>
            <p></p>

            
            
            <Suspense fallback={<ProgramCardSkeletonContainer/>}>
                <ProgrammsContainer userNickname={userNickname}/>
            </Suspense>
        </>
    );
};

export default ProgramsPage;
