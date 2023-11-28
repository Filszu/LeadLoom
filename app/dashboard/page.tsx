import LeadsTable from '@/components/leadsTable/LeadsTable';
import UserLeadsTable from '@/components/leadsTable/UserLeadsTable';
import { TableSkeleton } from '@/components/skeletons/skeletons';
import React, { Suspense } from 'react';

const Dashboard = () => {
    return (
        <>
            <h1>Dashboard</h1>

            <Suspense fallback={<TableSkeleton/>}>
                <UserLeadsTable />
            </Suspense>
            <hr />
            <hr />
            <LeadsTable />
        </>
    );
};

export default Dashboard;
