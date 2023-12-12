import getPublicUser from "./getPublicUser";

// export const publicUserSession = getPublicUser()
// export const publicUserSession =async ()=>await getPublicUser()

export const publicUserSession = await getPublicUser()