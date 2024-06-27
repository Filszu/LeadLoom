'use server';

import supabase from '@/config/supaBaseClient';
import { Lead } from '@/database.types';
import {
    UserLead,
    IUserLeadExtended,
    IqueryProps,
    IUserLeadWithLeads,
} from '@/types';

// export default async function getLeads(props: IqueryProps) {

//     try{
//         let { data: leads, error } = await supabase
//         .from('leads')
//         .select('*').order(props.orderBy || 'created_at', { ascending: props.ascending || false } )
//         .limit(props.limit || 5)

//         return leads as Lead[]
//     }catch(error){
//         console.error(error)
//     }

// }


// wystarczy ostani lead ze statusem by okreslic ostateczny stauts

export async function getUserLeads(props: IqueryProps) {
    if (!props.userID) return null;

    try {
        let { data, error } = await supabase
            .from('userLeads')
            .select(
                `
                *,
                programms(programName),
                leads:leads(*)
            `,
            )
            .order(props.orderBy || 'created_at', {
                ascending: props.ascending || false,
            })
            .eq('userId', props.userID)
            // .limit(1)

        if (error) {
            console.error(error);
            return null;
        }

        console.log("-----------------")
        // console.log(data)
        return data as IUserLeadWithLeads[];
    } catch (error) {
        console.error(error);
        return null;
    }
}
