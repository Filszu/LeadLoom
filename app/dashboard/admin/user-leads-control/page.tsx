import { publicUserSession } from '@/utils/supabase/publicUserSession';
import { redirect } from 'next/navigation';
import React from 'react'

const UserLeadsPage = async() => {
    const publicUser = await publicUserSession();

    const userNickname = publicUser?.nickname;
    const userId = publicUser?.id;

    if (!userId || !userNickname) redirect('/dashboard/settings/username');

    // NOTE: later change to role admin
    // but now its only one admin LOL - me hahaha

    if(userNickname!=="filszu") redirect("/dashboard")
    
  return (
    <div>UserLeadsPage</div>

    
  )
}

export default UserLeadsPage