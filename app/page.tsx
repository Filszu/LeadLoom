import supabase from '@/config/supaBaseClient';

// export const dynamic = "force-dynamic"



export default async function Home() {
 
  
  let { data: tickets, error } = await supabase
  .from('tickets')
  .select('*')

  console.log(tickets)
        

  return (
    <>
     HELLO
    </>
  );
}
