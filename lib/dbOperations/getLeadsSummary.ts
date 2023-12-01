'use server'

import supabase from "@/config/supaBaseClient"
import { Lead } from "@/database.types"
import { UserLead, IUserLeadExtended, IqueryProps, LeadsSummary } from "@/types"







export default async function getLeadsSummary(props: IqueryProps) {


    // TODO: select only not older than 30 days / 360days
    try{
        let { data: leadsReport, error } = await supabase
        .from('leads_summary')
        .select('*')
        
        .order(props.orderBy || 'date', { ascending: props.ascending || true } )
        .limit(props.limit || 500)

        // console.log('leadsReport', leadsReport)
        return leadsReport as LeadsSummary[]

    }catch(error){
        console.error(error)
    }

        
   

}