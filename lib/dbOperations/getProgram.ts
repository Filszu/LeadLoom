'use server'

import supabase from "@/config/supaBaseClient"
import { IqueryProps, Program } from "@/types"








export default async function getProgram(props: IqueryProps, id: string) {


    
    try{
        let { data: program, error } = await supabase
        .from('programms')
        .select('*')
        .eq('programID', id)
        .single()

        console.log('program', program)
        return program as Program

    }catch(error){
        console.error(error)
    }

        
   

}