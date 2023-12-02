import LeadsTable from '@/components/leadsTable/LeadsTable';
import UserLeadsTable from '@/components/leadsTable/UserLeadsTable';
import LeadsChartSection from '@/components/sections/LeadsChartSection';
import { ChartSkeleton, TableSkeleton } from '@/components/skeletons/skeletons';
import getSession from '@/utils/supabase/getSession';
import React, { Suspense } from 'react';

const Dashboard = async() => {

    const user = await getSession();
    console.log('DASHBOARD page')
    console.log(user)

    const userEmail = user?.email;

    
    return (
        <>
            <h1>Dashboard{userEmail&&<>hello {userEmail}</>}</h1>

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
