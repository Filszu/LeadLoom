'use server'

import supabase from "@/config/supaBaseClient"


export default async function postLead(leadData: any) {

    console.log("Posting song...")

    

    const {data, error } = await supabase
    .from('leads')
    .insert({ info:`${JSON.stringify(leadData)}`, })
   

    if (error) {
        console.error(error);
        return null;
    }

    
   
 
   


    


    // revalidatePath("/")
}

