import { publicUserSession } from '@/utils/supabase/publicUserSession';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const AdminPage = async() => {
    const publicUser = await publicUserSession();

    const userNickname = publicUser?.nickname;
    const userId = publicUser?.id;

    if (!userId || !userNickname) redirect('/dashboard/settings/username');

    // NOTE: later change to role admin
    // but now its only one admin LOL - me hahaha

    if (userNickname !== 'filszu') redirect(`/dashboard`);
    
    return (
        <section>
            <div>AdminPage</div>
            <Link href={`./admin/user-leads-control/${userId}`} >
               User Leads Control
            </Link>
        </section>
    );
};

export default AdminPage;
