import LeadTimelineChart from '@/components/charts/LeadsChart';
import LeadsTable from '@/components/leadsTable/LeadsTable';
import UserLeadsTable from '@/components/leadsTable/UserLeadsTable';
import LeadsChartSection from '@/components/sections/LeadsChartSection';
import { ChartSkeleton } from '@/components/skeletons/skeletons';
import getLeadsSummary from '@/lib/dbOperations/getLeadsSummary';
import { ILeadTimelineChartPropsItem, TLeadTimelineChartProps } from '@/types';
import { ApexOptions } from 'apexcharts';
import React, { Suspense } from 'react';

export const revalidate = 10;

const Reports = async () => {
    return (
        <>
            <h1>Reports</h1>
            <Suspense fallback={
            <ChartSkeleton/>}
            >
                <LeadsChartSection />
            </Suspense>
        </>
    );
};

export default Reports;
