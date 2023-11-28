'use server'

import supabase from "@/config/supaBaseClient"
import { Lead } from "@/database.types"
import { UserLead, IUserLeadExtended, IqueryProps } from "@/types"







export default async function getLeads(props: IqueryProps) {

    try{
        let { data: leads, error } = await supabase
        .from('leads')
        .select('*').order(props.orderBy || 'created_at', { ascending: props.ascending || false } )
        .limit(props.limit || 5)

        return leads as Lead[]
    }catch(error){
        console.error(error)
    }

        
   

}


export async function getUserLeads(props: IqueryProps) {

    try{
        let { data: leads, error } = await supabase
        .from('userLeads')
        .select('*, programms(programName)')
        .order(props.orderBy || 'created_at', { ascending: props.ascending || false } )
        // .limit(props.limit || 5)

        return leads as IUserLeadExtended[]

    }catch(error){
        console.error(error)
    }

        
   

}
