'use server'

import { createClient_server } from '@/utils/supabase/server';

interface IUpdateUserNameSurname {
    first_name: string;
    last_name: string;
}

export default async function updateUserNameSurname(props: IUpdateUserNameSurname) {
    console.log('Updating name and surname...', props.first_name, props.last_name);

    try {
        const supabase = await createClient_server();

        // Get current user
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        if (userError || !user) {
            throw new Error('User not authenticated');
        }

        // Update user profile table (assuming table is called "profiles")
        const { error } = await supabase
            .from('profiles')
            .update({
                first_name: props.first_name,
                last_name: props.last_name,
            })
            .eq('id', user.id);

        if (error) {
            throw error;
        }

        console.log('Name and surname updated');
    } catch (e) {
        console.log(e);
    }
}