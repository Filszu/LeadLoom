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


}


export default async function getLeads(props: props) {

    try{
        let { data: leads, error } = await supabase
        .from('leads')
        .select('*')

        return leads as Lead[]
    }catch(error){
        console.error(error)
    }

        
   

}

