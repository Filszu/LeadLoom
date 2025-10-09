import Link from 'next/link';
import { headers, cookies } from 'next/headers';
import { createClient_server } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { TabSection } from '@/components/tabSection/TabSection';
import OAuthForm from './OAuthForm';
import SubmitButton from '@/components/ui/custom/SubmitButton';

export default function Login({
    searchParams,
}: {
    searchParams: { message: string };
}) {
    const signIn = async (formData: FormData) => {
        'use server';

        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        // const cookieStore = cookies();
        // const supabase = createClient_server(cookieStore);
        const supabase = await createClient_server();

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return redirect(
                `/login?message=Could not authenticate user ${error.message}`,
            );
            console.log('error=========', error);
        }

        return redirect('/dashboard');
    };

    // const googleLogin = async () => {
    //     'use server';

    // };

    const signUp = async (formData: FormData) => {
        'use server';

        const origin = headers().get('origin');
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const firstName = formData.get('firstName') as string;
        const lastName = formData.get('lastName') as string;
        const nickname = formData.get('nickname') as string;

        // const cookieStore = cookies();
        // const supabase = createClient_server(cookieStore);
        const supabase = await createClient_server();

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${origin}/auth/callback`,
            },
        });

        console.log('newUser=========', data);

        const userId = data?.user?.id;

        if (!userId) {
            console.log('error=========', error);
            return redirect(`/login?message=${error?.message}`);
        }
        if (error) {
            console.log('error=========', error);

            
            return redirect('/login?message=Could not create new user');
        }

        const { data: publicProfiles, error: publicProfilesError } =
            await supabase
                .from('profiles')
                .insert([
                    {
                        id: `${userId}`,
                        first_name: `${firstName}`,
                        last_name: `${lastName}`,
                        nickname: `${nickname}`,
                    },
                ])
                .select();

        if (publicProfilesError) {
            console.log('error=========', publicProfilesError);
            return redirect(`/login?message=User with that nickname probably exist ${publicProfilesError.message}`);
        }

        // return redirect(
        //     '/login?message=Check email to continue sign in process',
        // );
        return redirect(
            '/dashboard/settings/username',
        );
    };

    return (
        <div className="flex w-full flex-1 flex-col justify-center gap-2 px-8 sm:max-w-md mt-10 lg:mt-0">
            <section className=' '>
            <OAuthForm
            // signIn={googleLogin}
            />
            </section>
            <Link
                href="/"
                className="bg-btn-background hover:bg-btn-background-hover group absolute left-8 top-8  items-center rounded-md px-4 py-2 text-sm text-foreground no-underline md:flex hidden"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
                >
                    <polyline points="15 18 9 12 15 6" />
                </svg>{' '}
                Back
            </Link>

            <TabSection
                tab2Children={
                    <form
                        className="flex w-full flex-1 flex-col justify-center gap-2 text-foreground animate-in"
                        action={signIn}
                    >
                        <label className="text-md" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="mb-6 rounded-md border bg-inherit px-4 py-2"
                            name="email"
                            placeholder="you@example.com"
                            required
                        />
                        <label className="text-md" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="mb-6 rounded-md border bg-inherit px-4 py-2"
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            required
                            minLength={6}
                        />

                        <SubmitButton className="mb-2 rounded-md bg-green-700 px-4 py-2 text-foreground">
                            Sign In
                        </SubmitButton>
                        {/* <button
                            formAction={signUp}
                            className="mb-2 rounded-md border border-foreground/20 px-4 py-2 text-foreground"
                        >
                            Sign Up
                        </button> */}

                        {searchParams?.message && (
                            <p className="mt-4 bg-foreground/10 p-4 text-center text-foreground">
                                {searchParams.message}
                            </p>
                        )}
                    </form>
                }
                tab1Children={
                    <form
                        className="flex w-full flex-1 flex-col justify-center gap-2 text-foreground animate-in"
                        action={signUp}
                    >
                        <label className="text-md" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="mb-6 rounded-md border bg-inherit px-4 py-2"
                            name="email"
                            placeholder="you@example.com"
                            required
                        />
                        {/* <label className="text-md" htmlFor="firstName">
                            First Name
                        </label>
                        <input
                            className="mb-6 rounded-md border bg-inherit px-4 py-2"
                            name="firstName"
                            placeholder="John"
                            required
                            minLength={1}
                        />
                        <label className="text-md" htmlFor="lastName">
                            Last Name
                        </label>
                        <input
                            className="mb-6 rounded-md border bg-inherit px-4 py-2"
                            name="lastName"
                            placeholder="Doe"
                            required
                            minLength={1}
                        /> */}
                        <label className="text-md" htmlFor="nickname">
                            Nickname
                        </label>
                        <input
                            className="mb-6 rounded-md border bg-inherit px-4 py-2"
                            name="nickname"
                            placeholder="CyberSuperMan"
                            required
                            minLength={3}
                        />

                        <label className="text-md" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="mb-6 rounded-md border bg-inherit px-4 py-2"
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            required
                            minLength={6}
                        />

                        <SubmitButton
                            // formAction={signUp}
                            className="mb-2 rounded-md border border-foreground/20 px-4 py-2 text-foreground"
                        >
                            Sign Up
                        </SubmitButton>
                        {searchParams?.message && (
                            <p className="mt-4 bg-foreground/10 p-4 text-center text-foreground">
                                {searchParams.message}
                            </p>
                        )}
                    </form>
                }
                tab2Title="login"
                tab1Title="register"
                tab2Value="login"
                tab1Value="register"
            />
        </div>
    );
}
