'use server';

// import supabase from "@/config/supaBaseClient"
import supabase from '@/config/supaBaseClient';
import { revalidatePath } from 'next/cache';
interface IUpdateUserLeads {
    leadId: string;
    updates: Record<string, any>; // Allows for dynamic columns and values
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
