'use server'

// import supabase from "@/config/supaBaseClient"
import supabase from '@/utils/supabase/sbClient';
import { createClient_server } from '@/utils/supabase/server';
interface IUpdateUserPassword{
    pass: string;
}

export default async function updateUserPass(props:IUpdateUserPassword) {

    console.log("Updatig pass...", props.pass)

    try{
    // const res = await supabase.auth.updateUser({ password: props.pass })

    const supabase = await createClient_server();
    const res = await supabase.auth.updateUser({ password: props.pass })
    
    console.log(res)
 
    }
    catch(e){
        console.log(e)
    }
    // revalidatePath("/")
}


