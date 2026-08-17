'use server'

import supabase from "@/config/supaBaseClient"
import { TablesInsert } from "@/database.types"
import { IAdmitadLead } from "@/types"
import postUserLead from "./postUserLead"



export default async function postLead(leadData: IAdmitadLead) {

    console.log("Posting lead...")

    const dbLead: TablesInsert<"leads"> = {
        action: leadData.action,
        action_id: leadData.action_id,
        admitad_id: leadData.admitad_id,
        country_code: leadData.country_code ?? null,
        currency: leadData.currency ?? null,
        offer_id: leadData.offer_id ?? null,
        offer_name: leadData.offer_name ?? null,
        payment_status: leadData.payment_status ?? null,
        subid: leadData.subid ?? null,
        subid1: leadData.subid1 ?? null,
        subid2: leadData.subid2 ?? null,
        subid3: leadData.subid3 ?? null,
        subid4: leadData.subid4 ?? null,
        type: leadData.type ?? null,
        user_agent: leadData.user_agent ?? null,
        user_referer: leadData.user_referer ?? null,
        website_name: leadData.website_name ?? null,
        click_time: leadData.click_time ?? null,
        conversion_time: leadData.conversion_time ?? null,
        order_id: leadData.order_id ?? null,
        order_sum: leadData.order_sum ?? null,
        payment_sum: leadData.payment_sum ?? null,
        reward_ready: leadData.reward_ready ?? null,
        website_id: leadData.website_id ? Number(leadData.website_id) : null,
        time: leadData.time ?? null,
    }

    const {data, error } = await supabase
    .from('leads')
    .insert({ ...dbLead})
    .select('id')
   

    if (error || !data?.[0]) {
        console.error(error);
        return null;
    }

    const leadId = data[0].id

    // subid 1 is connected with username
    if(dbLead.subid1){
        try{
            
          await postUserLead({leadData: leadData, leadId})  
        }
        catch(e){
            console.error(e)
        }
        
    }
    else{
        // TODO: add error handling
        console.log('Subid1 is required')
    }

    return { id: leadId }

    

    // // subid 1 is connected with username
    // if(leadData.subid1){

    // }
 
   


    


    // revalidatePath("/")
}
