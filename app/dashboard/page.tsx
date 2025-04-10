import LeadsTable from '@/components/leadsTable/LeadsTable';
import UserLeadsTable from '@/components/leadsTable/UserLeadsTable';
import LeadsChartSection from '@/components/sections/LeadsChartSection';
import { ChartSkeleton, TableSkeleton } from '@/components/skeletons/skeletons';
import SummaryCardContainer from '@/components/summaryCard/SummaryCardContainer';

import { publicUserSession } from '@/utils/supabase/publicUserSession';

import { redirect } from 'next/navigation';
import React, { Suspense } from 'react';

export const revalidate = 180;

const Dashboard = async () => {
    // const user = await getSession();
    // console.log('DASHBOARD page')
    // console.log(user)

    // const userEmail = user?.email;

    const publicUser = await publicUserSession();

    console.log('publicuser',publicUser)

    const userNickname = publicUser?.nickname;
    const userId = publicUser?.id;

    // if (!userNickname) redirect(`/login?message=Could not authenticate user $no user nickname`);
    // if (!userId) redirect(`/login?message=Could not authenticate user $no user id`);
    // console.log('userId', userId);
    // console.log('userNickname', userNickname);
    if (!userId || !userNickname) redirect(`/login`);
    if (!userId || !userNickname) return <>xxx</>;

    return (
        <>
            <h1>
                Dashboard
                {userNickname && (
                    <>
                        {' '}
                        - hello <b>{userNickname}</b>
                    </>
                )}
            </h1>

            <Suspense fallback={<p>...</p>}>
                <SummaryCardContainer
                    userId={userId}
                    userNickname={userNickname}
                />
            </Suspense>
            <Suspense fallback={<ChartSkeleton />}>
                <LeadsChartSection userId={userId} />
            </Suspense>
            <Suspense fallback={<TableSkeleton />}>
                <UserLeadsTable userId={userId} />
            </Suspense>

            <hr />
            <hr />
            {/* <LeadsTable /> */}
            
        </>
    );
};

export default Dashboard;
