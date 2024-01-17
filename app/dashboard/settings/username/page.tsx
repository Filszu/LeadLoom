import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import postPublicProfile from '@/lib/dbOperations/postPublicProfile';
import { getCookie } from '@/utils/appCookies';
import getPublicUser from '@/utils/supabase/getPublicUser';
import getSession from '@/utils/supabase/getSession';
import { publicUserSession } from '@/utils/supabase/publicUserSession';

import { redirect } from 'next/navigation';
const UserPage = async ({
    searchParams,
}: {
    searchParams: { message: string };
}) => {
    // const publicUser = await getPublicUser();
    // console.log('publicuser',publicUser)

    // const userNickname = publicUser?.nickname;
    // const userId = publicUser?.id;

    // if(!userNickname) redirect('/dashboard/settings');
    // if(!userId) redirect('/login');

    // const publicUser = await publicUserSession();

    // const userNickname = publicUser?.nickname;
    // const userId = publicUser?.id;

    // if exists -> that means user has already set his nickname
    const publicUser = await publicUserSession();
    // if(publicUser) redirect('/dashboard');

    const user = await getSession();
    // console.log(user);

    if (!user) redirect('/login');

    const userFullName = user.user_metadata?.full_name;
    const userId = user.id;

    const cookiePromoCode = await getCookie('promocode');

    console.log('cookiePromoCode', cookiePromoCode);

    async function submitForm(formData: FormData) {
        'use server';

        console.log('submit form');
        const res = await postPublicProfile({
            first_name: userFullName,
            last_name: formData.get('last_name') as string,
            nickname: formData.get('nickname') as string,
            id: userId,
            referred_by: cookiePromoCode,
            withdrawn: 0,
        });

        if (!res) {
            console.log('error');
            return redirect(
                '/dashboard/settings/username?message=This nickname is already taken',
            );
        } else {
            redirect('/dashboard/settings');
        }
    }
    return (
        <>
            <h1>Settings</h1>
            <h2>
                Hey, <b>{userFullName}</b> set your nickname
            </h2>

            <form action={submitForm}>
                <Input
                    className="my-2"
                    name="user_id"
                    required
                    placeholder="userID"
                    value={userId}
                    disabled
                />
                <Input
                    className=" my-2"
                    name="first_name"
                    required
                    placeholder="first name"
                    value={userFullName}
                    disabled
                />
                <Input
                    className=" my-2"
                    name="last_name"
                    required
                    placeholder="last name"
                />
                <Input
                    className=" my-2"
                    name="nickname"
                    required
                    placeholder="nickname"
                />
                <Input
                    className=" my-2"
                    name="promocode"
                    required
                    value={"PROMO CODE: "+cookiePromoCode ?? ''}
                    placeholder="promocode"
                    disabled
                />
                <Button className=" my-2 p-6">
                    <span className="flex items-center justify-center gap-1 text-lg text-white">
                        Set
                    </span>
                </Button>
                {searchParams.message && (
                    <p className="text-red-500">{searchParams.message}</p>
                )}
            </form>

            <div className="h-10"></div>
        </>
    );
};

export default UserPage;
