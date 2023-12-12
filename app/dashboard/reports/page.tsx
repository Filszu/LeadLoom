
import LeadsChartSection from '@/components/sections/LeadsChartSection';
import { ChartSkeleton } from '@/components/skeletons/skeletons';

import getPublicUser from '@/utils/supabase/getPublicUser';
import { publicUserSession } from '@/utils/supabase/publicUserSession';
import { redirect } from 'next/navigation';
import React, { Suspense } from 'react';

export const revalidate =60;


const Reports = async () => {

    const publicUser = await publicUserSession;
    // console.log('publicuser',publicUser)

    const userNickname = publicUser?.nickname;
    const userId = publicUser?.id;

    if(!userNickname) redirect('/dashboard/settings'); 
    if(!userId) redirect('/login');
    
    return (
        <>
            <h1>Reports</h1>
            <Suspense fallback={
            <ChartSkeleton/>}
            >
                <LeadsChartSection userId={userId}/>
            </Suspense>
        </>
    );
};

export default Reports;
