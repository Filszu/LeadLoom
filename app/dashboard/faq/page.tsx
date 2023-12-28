import { Suspense } from 'react';

import getPublicUser from '@/utils/supabase/getPublicUser';
import { redirect } from 'next/navigation';
import {
    ProgramCardSkeleton,
    ProgramCardSkeletonContainer,
} from '@/components/skeletons/skeletons';
import { publicUserSession } from '@/utils/supabase/publicUserSession';
import { Button } from '@/components/ui/button';
import { FaLocationArrow } from 'react-icons/fa';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import FaqSection from './faqSection';

export const revalidate = 3600;

const SettingsPage = async () => {
    // const publicUser = await getPublicUser();
    // console.log('publicuser',publicUser)

    // const userNickname = publicUser?.nickname;
    // const userId = publicUser?.id;

    // if(!userNickname) redirect('/dashboard/settings');
    // if(!userId) redirect('/login');

    const publicUser = await publicUserSession();

    const userNickname = publicUser?.nickname;
    const userId = publicUser?.id;

    if (!userId || !userNickname) redirect('/dashboard/settings/username');

    return (
        <>
            <h1>FAQ</h1>
            <h2>Hey, {userNickname ?? ''}</h2>
            <FaqSection />
        </>
    );
};

export default SettingsPage;
