'use server';
import supabase from '@/config/supaBaseClient';
import { PublicUser } from '@/types';
import getSession from './getSession';

// import { cache } from './savedSession';

interface Cache {
    publicUserCache: PublicUser | null;
}

// const cache: Cache = {
//   publicUserCache: null,
// };

export default async function getPublicUser() {
  
    const sessionUser = await getSession()
    if(!sessionUser) return null
    const sessionUserId = sessionUser?.id
 
    let { data: profiles, error } = await supabase
    .from('profiles')
    .select("*")
    .eq('id', sessionUserId)
    .single()
  // Filters
//   .eq('column', 'Equal to')

    return profiles as PublicUser

}
