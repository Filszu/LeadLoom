import ControlLeadsTable from '@/components/leadsTable/ControlLeadsTable';
import { TableSkeleton } from '@/components/skeletons/skeletons';
import { publicUserSession } from '@/utils/supabase/publicUserSession';
import { redirect } from 'next/navigation';
import React, { Suspense } from 'react';

const UserLeadsPage = async () => {
    const publicUser = await publicUserSession();

    const userNickname = publicUser?.nickname;
    const userId = publicUser?.id;

    if (!userId || !userNickname) redirect('/dashboard/settings/username');

    // NOTE: later change to role admin
    // but now its only one admin LOL - me hahaha

    if (userNickname !== 'filszu') redirect('/dashboard');

    //  I was wondering if it would be better to show leads grouped by user or just all leads
    //  I think it would be better to show all leads

    // i know the easiest way would be to show user lead and then show all records from `leads` with official statuses (or only the last one*)

    // couse its obvious that last status is the current one

    return (
        <section>
            <div>UserLeadsPage</div>
            <Suspense fallback={<TableSkeleton />}>
                <ControlLeadsTable userId={userId} />
            </Suspense>
        </section>
    );
};

export default UserLeadsPage;
