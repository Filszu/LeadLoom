"use server"

import { createClient_server } from "./server"
import { cookies } from 'next/headers'

export default async function getSession(){

    const cookieStore = cookies()
    const supabase = createClient_server(cookieStore)

    console.log('GET SESSION / USER')
    // console.log(supabase.auth.getSession())
    // console.log(supabase.auth.getUser())

    const {data} = await supabase.auth.getUser()

    const user = data.user;

    return user
}

