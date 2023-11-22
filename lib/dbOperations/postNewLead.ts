'use server'

import supabase from "@/config/supaBaseClient"
import { Lead } from "@/database.types"



export default async function postLead(leadData: IAdmitadLead) {

    console.log("Posting lead...")

    

    // const dbLead: Lead = {
    const dbLead = {

       
        action: leadData.action,
        action_id: leadData.action_id,
        admitad_id: leadData.admitad_id,
        country_code: leadData.country_code??null,
        currency: leadData.currency??null,
        offer_id: leadData.offer_id??null,
        offer_name: leadData.offer_name??null,
        payment_status: leadData.payment_status??null,
        subid: leadData.subid??null,
        subid1: leadData.subid1??null,
        subid2: leadData.subid2??null,
        subid3: leadData.subid3??null,
        subid4: leadData.subid4??null,
        type: leadData.type??null,
        user_agent: leadData.user_agent??null,
        user_referer: leadData.user_referer??null,
        website_name: leadData.website_name??null,
        click_time: Number(leadData.click_time??null),
        conversion_time: Number(leadData.conversion_time??null),
        order_id: Number(leadData.order_id??null),
        order_sum: Number(leadData.order_sum??null),
        payment_sum: Number(leadData.payment_sum??null),
        reward_ready: Number(leadData.reward_ready??null),
        website_id: Number(leadData.website_id??null),
        time: Number(leadData.time??null),
        






    }

    const {data, error } = await supabase
    .from('leads')
    .insert({ ...dbLead})
   

    if (error) {
        console.error(error);
        return null;
    }

    
   
 
   


    


    // revalidatePath("/")
}

