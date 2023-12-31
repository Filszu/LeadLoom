'use server';
// added use server to the top of the file
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';
import 'server-only'


// maybe async?
// export const createClient_server = () => {
export async function createClient_server() {
    const cookieStore = cookies();

    return createServerClient(
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
                    cookieStore.set({ name, value: '', ...options });
                },
            },
        },
    );

    // return createServerClient(
    //     process.env.NEXT_PUBLIC_SUPABASE_URL!,
    //     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    //     {
    //         cookies: {
    //             get(name: string) {

    //                 console.log('🍪GET',
    //                 cookieStore.get(name)?.value
    //                 )

    //                 return cookieStore.get(name)?.value;
    //             },
    //             set(name: string, value: string, options: CookieOptions) {
    //                 // cookieStore.set({ name, value, ...options })

    //                 console.log('🍪SET', cookieStore.set({ name, value, ...options }))
    //               },
    //               remove(name: string, options: CookieOptions) {

    //                 cookieStore.set({ name, value: '', ...options })
    //               },
    //         },
    //     },
    // );
}
// export const createClient_server = (
//     cookieStore: ReturnType<typeof cookies>,
// ) => {
//     return createServerClient(
//         process.env.NEXT_PUBLIC_SUPABASE_URL!,
//         process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//         {
//             cookies: {
//                 get(name: string) {
//                     return cookieStore.get(name)?.value;
//                 },
//                 set(name: string, value: string, options: CookieOptions) {
//                     try {
//                         cookieStore.set({ name, value, ...options });
//                     } catch (error) {
//                         // The `set` method was called from a Server Component.
//                         // This can be ignored if you have middleware refreshing
//                         // user sessions.
//                     }
//                 },
//                 remove(name: string, options: CookieOptions) {
//                     try {
//                         cookieStore.set({ name, value: '', ...options });
//                     } catch (error) {
//                         // The `delete` method was called from a Server Component.
//                         // This can be ignored if you have middleware refreshing
//                         // user sessions.
//                     }
//                 },
//             },
//         },
//     );
// };