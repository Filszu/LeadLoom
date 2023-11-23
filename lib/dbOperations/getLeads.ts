'use server'

import supabase from "@/config/supaBaseClient"
import { Lead } from "@/database.types"



// query props

interface props{
    userID?: string,
    limit?: number,
    startFrom?: number,
    orderBy?: string,
    order?: string,
    ascending?: boolean


}


export default async function getLeads(props: props) {

    try{
        let { data: leads, error } = await supabase
        .from('leads')
        .select('*').order(props.orderBy || 'created_at', { ascending: props.ascending || false } ).
        limit(props.limit || 5)

        return leads as Lead[]
    }catch(error){
        console.error(error)
    }

        
   

}

