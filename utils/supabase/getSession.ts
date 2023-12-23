"use server"

import { createClient_server } from './server';

export default async function getSession() {
    // const cookieStore = cookies();
    // const supabase = createClient_server(cookieStore);
    const supabase = createClient_server();
    // console.log(supabase)

    console.log('GET SESSION / USER');

    
    // console.log(supabase.auth.getSession())
    // console.log(supabase.auth.getUser())

    // const session = await supabase.auth.getSession();
    // console.log("⚡session",session)

    const { data } = await supabase.auth.getUser();

    const user = data.user;

    return user;
}

// export const savedSession = await getSession()!;
