import ProgramCard from '@/components/program/ProgramCard';
import { Suspense } from 'react';
import ProgrammsContainer from './ProgrammsContainer';
import getPublicUser from '@/utils/supabase/getPublicUser';
import { redirect } from 'next/navigation';
import {
    ProgramCardSkeleton,
    ProgramCardSkeletonContainer,
} from '@/components/skeletons/skeletons';
import { publicUserSession } from '@/utils/supabase/publicUserSession';
import FilterSettings from './filterSettings';



export const revalidate = 3600;

const ProgramsPage = async ({
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}) => {
    const publicUser = await publicUserSession();
    // console.log('publicuser',publicUser)

    const userNickname = publicUser?.nickname;
    const userId = publicUser?.id;

    if (!userNickname) redirect('/dashboard/settings');
    if (!userId) redirect('/login');

    let orderBy = (searchParams?.orderBy as string) ?? 'cpaUser';
    const ascending = (Boolean(searchParams?.ascending) as boolean) ?? false;

    if (
        orderBy !== 'cpaUser' &&
        orderBy !== 'status' &&
        orderBy !== 'created_at' &&
        orderBy !== 'position' &&
        orderBy !== 'programName' &&
        orderBy !== 'time'
    ) {
        orderBy = '';
    }

    return (
        <>
            <h1>Programs</h1>
            <h2>Join to program and earn $$$*</h2>
            <p></p>
            <FilterSettings 
                orderBy={orderBy}
                ascending={ascending}
            />

            <Suspense fallback={<ProgramCardSkeletonContainer />}>
                <ProgrammsContainer
                    userNickname={userNickname}
                    orderBy={orderBy}
                    ascending={ascending}
                />
            </Suspense>
        </>
    );
};

export default ProgramsPage;
