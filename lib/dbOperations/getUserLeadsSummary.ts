'use server'

import supabase from "@/config/supaBaseClient"
import { Lead } from "@/database.types"
import { IqueryProps, UserLeadsSummary,} from "@/types"





// get summary of leads for a user - statues and sum

export default async function getUserLeadsSummary(props: IqueryProps) {


    if(!props.userID) return null
    // TODO: select only not older than 30 days / 360days
    try{
        let { data: leadsUserSummary, error } = await supabase
        .from('leadssumstatus_summary')
        .select('*')
        .eq("userId", props.userID)
        .limit(props.limit || 500)
        

        
        return leadsUserSummary as UserLeadsSummary[]

    }catch(error){
        console.error(error)
    }

        
   

}