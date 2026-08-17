'use server';

import supabase from '@/config/supaBaseClient';
import { TablesUpdate } from '@/database.types';

interface IUpdateUserLeads {
    leadId: string;
    updates: TablesUpdate<'userLeads'>;
}

export default async function updateUserLeads(props: IUpdateUserLeads) {
    console.log('Updating userLeads...', props);

    try {
       

        // const { data, error } = await supabase
        //     .from('userLeads')
        //     // .update(props.updates)
        //     .update({status:"accepted"})
        //     .eq('leadId', props.leadId) // Update based on leadId
        //     .limit(1) // Only update one record
        //     .select();
        const { data, error } = await supabase
            .from('userLeads')
            .update(props.updates) 
            // .update({status:"accepted"})
            .eq('id', props.leadId) 
            // .select()
      

        console.log(data, error);
        // revalidatePath("/dashboard/admin/user-leads-control")
    } catch (e) {
        console.log(e);
    }
    // revalidatePath("/")
}
