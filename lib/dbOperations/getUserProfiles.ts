'use server';

import supabase from '@/config/supaBaseClient';
import { IqueryProps, profiles } from '@/types';

export default async function getUserProfiles(props: IqueryProps) {
    try {
    
        

        let { data: profiles, error } = await supabase
            .from('profiles')
            .select('*');

         return profiles as profiles[];   
         
    } catch (error) {
        console.error(error);
    }
}
