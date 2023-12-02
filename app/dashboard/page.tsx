import LeadsTable from '@/components/leadsTable/LeadsTable';
import UserLeadsTable from '@/components/leadsTable/UserLeadsTable';
import LeadsChartSection from '@/components/sections/LeadsChartSection';
import { ChartSkeleton, TableSkeleton } from '@/components/skeletons/skeletons';
import getPublicUser from '@/utils/supabase/getPublicUser';
import getSession from '@/utils/supabase/getSession';
import React, { Suspense } from 'react';

const Dashboard = async() => {

    // const user = await getSession();
    // console.log('DASHBOARD page')
    // console.log(user)

    // const userEmail = user?.email;

    const publicUser = await getPublicUser();
    console.log('publicuser',publicUser)

    const userNickname = publicUser?.nickname;

    
    return (
        <>
            <h1>Dashboard{userNickname&&<> - hello <b>{userNickname}</b></>}</h1>

            <Suspense fallback={<TableSkeleton />}>
                <UserLeadsTable />
            </Suspense>
            
            <Suspense fallback={<ChartSkeleton />}>
                <LeadsChartSection />
            </Suspense>
            <hr />
            <hr />
            <LeadsTable />
        </>
    );
};

export default Dashboard;
