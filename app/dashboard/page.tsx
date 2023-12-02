import LeadsTable from '@/components/leadsTable/LeadsTable';
import UserLeadsTable from '@/components/leadsTable/UserLeadsTable';
import LeadsChartSection from '@/components/sections/LeadsChartSection';
import { ChartSkeleton, TableSkeleton } from '@/components/skeletons/skeletons';
import getSession from '@/utils/supabase/getSession';
import React, { Suspense } from 'react';

const Dashboard = async() => {

    const {data} = await getSession();
    console.log(data)
    return (
        <>
            <h1>Dashboard</h1>

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
