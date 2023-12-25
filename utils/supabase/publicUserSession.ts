"use server"; //<-added new
import getPublicUser from "./getPublicUser";
import { cache } from 'react'

// export const getItem = cache(async (id: string) => {
//     // ...
//   })
// export const publicUserSession = getPublicUser()
export const publicUserSession =cache(async ()=>await getPublicUser())


// TO READ:
// https://nextjs.org/docs/app/building-your-application/caching
// https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#using-react-cache-server-only-and-the-preload-pattern


// export const publicUserSession= async () => {
//     // Try to get the cached data from localStorage
//     const cachedData = localStorage.getItem('publicUser');

//     console.log('cachedData', cachedData)
//     if (cachedData) {
//         // If cached data exists, parse it and return
//         return JSON.parse(cachedData);
//     } else {
//         // If no cached data exists, fetch the data
//         const data = await getPublicUser();

//         // Cache the data in localStorage
//         localStorage.setItem('publicUser', JSON.stringify(data));

//         return data;
//     }
// }

