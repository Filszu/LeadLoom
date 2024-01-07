
import { redirect } from 'next/navigation';

import { publicUserSession } from '@/utils/supabase/publicUserSession';


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
            <section className="m-auto md:w-6/12">
                <h1>FAQ</h1>
                <h2>Hey, {userNickname ?? ''}</h2>
                <FaqSection />
            </section>
        </>
    );
};

export default SettingsPage;
