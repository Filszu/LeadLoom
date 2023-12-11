import supabase from '@/config/supaBaseClient';
import { cookies } from 'next/headers';
import { createClient } from '@/utils/supabase/server'
import Link from 'next/link';
// export const dynamic = "force-dynamic"



export default async function Home() {

  const cookieStore = cookies()

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore)
      return true
    } catch (e) {
      return false
    }
  }

  const isSupabaseConnected = canInitSupabaseClient()

 
  
  let { data: tickets, error } = await supabase
  .from('tickets')
  .select('*')

  console.log(tickets)
        

  return (
    <>
     <Link href="/dashboard">Dashboard</Link>

     {isSupabaseConnected && <p>Conencted</p>}
    </>
  );
}
