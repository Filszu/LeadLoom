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

export const revalidate = 60;

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
            <h1>Settings</h1>
            <h2>
                Hey, {userNickname ?? ''} here you can change your personal info{' '}
            </h2>
            <section>
                <Input
                    className="my-4"
                    name="first_name"
                    required
                    placeholder="first name"
                    value={publicUser.first_name ?? ''}
                    disabled
                />
                <Input
                    className=" my-4"
                    name="last_name"
                    required
                    placeholder="last name"
                    value={publicUser.last_name ?? ''}
                    disabled
                />

                <Input
                    className=" my-4"
                    name="nickname"
                    required
                    placeholder="nickname"
                    value={publicUser.nickname ?? ''}
                    disabled
                />
            </section>
            <p></p>

            <div className="h-10"></div>

            <h1>Withdraw reward</h1>
            <h2 className="cursor-not-allowed">
                Withdrawal threshold: 5$/20PLN
            </h2>

            <div className="py-4">
                <Progress value={1} />
            </div>

            <Button disabled={true} className="mr-2 cursor-not-allowed p-6">
                <span className="flex  cursor-not-allowed items-center justify-center gap-1 text-lg text-white">
                    Withdraw
                    <FaLocationArrow size={22} />
                </span>
            </Button>
            <p>
                Depending on the payment method, the service fee is 5-15%. But
                at least $1. It does not depend on us but on the payment service
            </p>

            <Suspense fallback={<ProgramCardSkeletonContainer />}></Suspense>
        </>
    );
};

export default SettingsPage;
