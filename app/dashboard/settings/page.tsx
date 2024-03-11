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
import EarningsChart from '@/components/earningsChart/EarningsChart';
import getUserLeadsSummary from '@/lib/dbOperations/getUserLeadsSummary';
import { UserLeadsSummary } from '@/types';

export const revalidate = 3600;

const SettingsPage = async () => {


    const publicUser = await publicUserSession();

    const userNickname = publicUser?.nickname;
    const userId = publicUser?.id;

    if (!userId || !userNickname) redirect('/dashboard/settings/username');

    const userLeadsSummary = await getUserLeadsSummary({ userID: userId });

   
    const summary = {
        accepted: 0,
        pending: 0,
        paidout: 0,
    };
    if (userLeadsSummary) {
        summary.paidout =
            userLeadsSummary.find(
                (item: UserLeadsSummary) => item.status === 'paidout',
            )?.total_value ?? 0;

        summary.accepted =
            userLeadsSummary.find(
                (item: UserLeadsSummary) => item.status === 'accepted',
            )?.total_value ?? 0;
        summary.pending =
            userLeadsSummary.find(
                (item: UserLeadsSummary) => item.status === 'pending',
            )?.total_value ?? 0;

        
    }

    async function submitWithdrawalForm() {
        'use server';
        console.log('submitWithdrawalForm');
        redirect(`mailto:info@leadloom.games?subject=leadloom withdrawal request&body=Hi, I would like to withdraw my earnings. My user id is ${userId} my nickname is ${userNickname} my earnings are ${summary.accepted} PLN and i already have ${summary.paidout} PLN paid out.`)
        
    }
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
                <Input
                    className=" my-4"
                    name="reffered by"
                    required
                    placeholder="reffered by"
                    value={'reffered by: ' + publicUser.referred_by ?? ''}
                    disabled
                />
            </section>
            <p></p>

            <div className="h-10"></div>

            <h1>Withdraw reward</h1>
            <h2 className="cursor-not-allowed">
                Withdrawal threshold:
                <ul className=" list-inside list-disc">
                    <li>🇺🇸🇬🇧🇳🇴🇱🇺 - 15$ </li>
                    <li>🇫🇷🇩🇪🇦🇹 - 10$ </li>
                    <li>🇵🇱 - 20PLN</li>
                </ul>
            </h2>

            <div className="py-4">
                <EarningsChart earnings={summary.accepted ?? 1} treshold={20} currency={"PLN"}/>
                <p>pedning / accepted / paidout</p>
                <span className="text-orange-400">{summary.pending}</span> /
                <span className="text-primary"> {summary.accepted} </span> /
                <span className="text-green-700"> {summary.paidout}</span> PLN
            </div>

            <form action={submitWithdrawalForm}>
                <Button
                    disabled={!(summary.accepted > 20)}
                    className="mr-2 cursor-not-allowed p-6"
                >
                    <span className="flex  cursor-not-allowed items-center justify-center gap-1 text-lg text-white">
                        Withdraw
                        <FaLocationArrow size={22} />
                    </span>
                </Button>
            </form>

            <p>
                Depending on the payment method, the service fee is 5-15%. But
                at least $1. It does not depend on us but on the payment service
            </p>

            <Suspense fallback={<ProgramCardSkeletonContainer />}></Suspense>
        </>
    );
};

export default SettingsPage;
