import { redirect } from 'next/navigation';

import { publicUserSession } from '@/utils/supabase/publicUserSession';
import Image from 'next/image';
export const revalidate = 3600;
import ss1 from '@/public/imgs/blog/leadloomRefFriend.png';
import Link from 'next/link';
const RefPage = async () => {
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
                <h1>Affiliate program</h1>
                <h2>
                    Hey, {userNickname ?? ''} join our affiliate program and
                    earn more money
                </h2>
                <br />
                <h2>How it works</h2>
                <h3>You have 2 possibilities to recommend leadloom website</h3>

                <br />
                <ul className="list-inside list-disc">
                    <li>
                        <b>
                            Recommend a specific game by clicking on the invite
                            friend button next to the program
                        </b>
                        (as in the screenshot)
                        <Image
                            src={ss1}
                            alt="how to reffer a program"
                            placeholder="blur"
                            className="rounded-lg"
                        />
                    </li>
                    <li>
                        then you get
                        <span className="font-bold text-primary">100% </span>
                        of the profits of your referral recommendation
                    </li>

                    <br />
                    <br />
                    <li>
                        <b>
                            Recommend a leadloom site through a promotional code
                        </b>
                    </li>
                    <li>
                        your code:
                        <Link
                            href={`/sign-up?promocode=${userNickname}`}
                            className="font-bold text-primary"
                            target="blank"
                        >
                            /sign-up?promocode={userNickname}
                        </Link>
                    </li>
                    <li>
                        then you will receive
                        <span className="font-bold text-primary"> 5% </span>
                        of any REWARDED (WITHDRAWN) rewards of your referred lifetime
                        <ol className="ml-9 list-inside list-decimal">
                            <li>
                                Share your referral link with your friends and
                                followers
                            </li>
                            <li>Earn 5% of their earnings</li>
                            <li>Withdraw your earnings</li>
                            <li>Repeat</li>
                            <li>Profit</li>
                        </ol>
                    </li>
                </ul>
                <h3>the choice is yours</h3>
            </section>
        </>
    );
};

export default RefPage;
