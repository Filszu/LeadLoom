import LeadsTable from '@/components/leadsTable/LeadsTable';
import UserLeadsTable from '@/components/leadsTable/UserLeadsTable';
import LeadsChartSection from '@/components/sections/LeadsChartSection';
import { ChartSkeleton, TableSkeleton } from '@/components/skeletons/skeletons';
import SummaryCard from '@/components/summaryCard/SummaryCard';
import SummaryCardContainer from '@/components/summaryCard/SummaryCardContainer';
import getPublicUser from '@/utils/supabase/getPublicUser';
import getSession from '@/utils/supabase/getSession';

import { redirect } from 'next/navigation';
import React, { Suspense } from 'react';

export const revalidate = 60;

const Dashboard = async () => {
    // const user = await getSession();
    // console.log('DASHBOARD page')
    // console.log(user)

    // const userEmail = user?.email;

    const publicUser = await getPublicUser();
    // console.log('publicuser',publicUser)

    const userNickname = publicUser?.nickname;
    const userId = publicUser?.id;

    if (!userNickname) redirect('/dashboard/settings');
    if (!userId) redirect('/login');

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
                <SummaryCardContainer userId={userId} />
            </Suspense>
            <Suspense fallback={<TableSkeleton />}>
                <UserLeadsTable userId={userId} />
            </Suspense>

            <Suspense fallback={<ChartSkeleton />}>
                <LeadsChartSection userId={userId} />
            </Suspense>
            <hr />
            <hr />
            <LeadsTable />
        </>
    );
};

export default Dashboard;
