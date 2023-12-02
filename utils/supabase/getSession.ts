"use server"

import { createClient } from "./server"
import { cookies } from 'next/headers'

export default async function getSession(){

    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    console.log('GET SESSION / USER')
    console.log(supabase.auth.getSession())
    console.log(supabase.auth.getUser())


    return supabase.auth.getSession()
}

