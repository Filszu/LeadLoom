import ControlLeadsTable from '@/components/leadsTable/ControlLeadsTable';
import { TableSkeleton } from '@/components/skeletons/skeletons';
import getUserProfiles from '@/lib/dbOperations/getUserProfiles';
import { publicUserSession } from '@/utils/supabase/publicUserSession';
import UserProfileForm from './userProfileForm';
import { redirect } from 'next/navigation';
import React, { Suspense } from 'react';

const UserLeadsPage = async ({ params }: { params: { userId: string } }) => {
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

    const selectedtUserId = params.userId;
  

    return (
        <section>
            <div>UserLeadsPage</div>
            <Suspense fallback={<TableSkeleton />}>
               <UserProfileForm userId={selectedtUserId}/>
            </Suspense>

            <Suspense fallback={<TableSkeleton />}>
                <ControlLeadsTable userId={selectedtUserId} />
            </Suspense>
        </section>
    );
};

export default UserLeadsPage;
