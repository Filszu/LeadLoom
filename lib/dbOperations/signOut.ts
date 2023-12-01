'use server';
import supabase from '@/utils/supabase/sbClient';
import { redirect } from 'next/navigation';

export default async function signOutUser() {
    console.log('Signing out user...');

    //     global (default) when all sessions active for the user are terminated.
    // local which only terminates the current session for the user but keep sessions on other devices or browsers active.
    // others to terminate all but the current session for the user.
    // await supabase.auth.signOut()

    // provide the relevant scope, the default being
    await supabase.auth.signOut({ scope: 'global' });

    redirect('/login');
}
