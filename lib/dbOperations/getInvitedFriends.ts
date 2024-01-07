'use server';

import supabase from '@/config/supaBaseClient';
import { Lead } from '@/database.types';
import { IqueryProps, PublicUser, UserLeadsSummary } from '@/types';

// get summary of leads for a user - statues and sum

export default async function getInvitedFriends(userNickname: string) {
    // if(!props.userID) return null
    // TODO: select only not older than 30 days / 360days
    try {
        let {
            data: profiles,
            // count,
            error,
        } = await supabase
            .from('profiles')
            .select('nickname, referred_by, withdrawn', 
            // {
            //     count: 'exact',
            //     head: true,
            // }
            )
            // Filters
            .eq('referred_by', userNickname)
            .limit(500);
            

        // { count: 'exact', head: true }

        return profiles as PublicUser[];

        console.log(profiles);
    } catch (error) {
        console.error(error);
    }
}
