import ProgramCard from '@/components/program/ProgramCard';
import { Suspense } from 'react';
import ProgrammsContainer from './ProgrammsContainer';
import getPublicUser from '@/utils/supabase/getPublicUser';
import { redirect } from 'next/navigation';

export const revalidate = 10;

const ProgramsPage = async () => {
    const publicUser = await getPublicUser();
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
            <Suspense fallback={<>loading...</>}>
                <ProgrammsContainer userNickname={userNickname}/>
            </Suspense>
        </>
    );
};

export default ProgramsPage;
