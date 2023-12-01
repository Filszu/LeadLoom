'use server'

import supabase from "@/config/supaBaseClient"
import { IqueryProps, Program } from "@/types"








export default async function getPrograms(props: IqueryProps) {


    
    try{
        let { data: programs, error } = await supabase
        .from('programms')
        .select('*')
        
        .order(props.orderBy || 'created_at', { ascending: props.ascending || false } )
        .limit(props.limit || 20)

        // console.log('programs', programs)
        return programs as Program[]

    }catch(error){
        console.error(error)
    }

        
   

}