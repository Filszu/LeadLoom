'use server';
import supabase from '@/config/supaBaseClient';
import { PublicUser } from '@/types';
import getSession from './getSession';

import { cache } from './savedSession';

export default async function getPublicUser() {

  if (cache.publicUserCache) {
    return cache.publicUserCache;
  }

    const sessionUser = await getSession();

    if (!sessionUser) return null;
    const sessionUserId = sessionUser?.id;

    let { data: profiles, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', sessionUserId)
        .single();

    // Filters
    //   .eq('column', 'Equal to')

    cache.publicUserCache = profiles as PublicUser;

    // return profiles as PublicUser;
    return cache.publicUserCache;
}
