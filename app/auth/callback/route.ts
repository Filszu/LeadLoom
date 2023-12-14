import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { type CookieOptions, createServerClient } from '@supabase/ssr';

export async function GET(request: Request) {
    const requestUrl = new URL(request.url);

    const { searchParams } = requestUrl;
    const code = searchParams.get('code');
    // if "next" is in param, use it as the redirect URL
    const next = searchParams.get('next') ?? '/dashboard';

    if (code) {
        const cookieStore = cookies();
        const supabase = createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            {
                cookies: {
                    get(name: string) {
                        return cookieStore.get(name)?.value;
                    },
                    set(name: string, value: string, options: CookieOptions) {
                        cookieStore.set({ name, value, ...options });
                    },
                    remove(name: string, options: CookieOptions) {
                        cookieStore.delete({ name, ...options });
                    },
                },
            },
        );
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (!error) {
            // return NextResponse.redirect(`${origin}/dashboard`);

            // return NextResponse.redirect(requestUrl.origin+"/dashboard")
            console.log('redirecting to', next, requestUrl.origin);
            // return NextResponse.redirect(requestUrl.origin+"/dashboard")
            return NextResponse.redirect(requestUrl.origin+"/dashboard/settings/username")
        }
    }

    // return the user to an error page with instructions
    return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}

// import { createClient_server } from '@/utils/supabase/server'
// import { NextResponse } from 'next/server'
// import { cookies } from 'next/headers'

// export async function GET(request: Request) {
//   // The `/auth/callback` route is required for the server-side auth flow implemented
//   // by the Auth Helpers package. It exchanges an auth code for the user's session.
//   // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-sign-in-with-code-exchange
//   const requestUrl = new URL(request.url)
//   const code = requestUrl.searchParams.get('code')

//   if (code) {
//     // const cookieStore = cookies()
//     // const supabase = createClient_server(cookieStore)
//     const supabase = createClient_server()
//     await supabase.auth.exchangeCodeForSession(code)
//   }

//   // URL to redirect to after sign in process completes
//   return NextResponse.redirect(`${requestUrl.origin}/dashboard`)
// }
