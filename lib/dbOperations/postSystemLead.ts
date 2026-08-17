'use server'

import { IAdmitadLead } from '@/types'
import { publicUserSession } from '@/utils/supabase/publicUserSession'
import postLead from './postNewLead'

function isAdmin(nickname?: string | null) {
    return nickname === 'filszu' || nickname === 'mocneGranie'
}

export default async function postSystemLead(leadData: IAdmitadLead) {
    const publicUser = await publicUserSession()
    const userNickname = publicUser?.nickname
    const userId = publicUser?.id

    if (!userId || !userNickname || !isAdmin(userNickname)) {
        return { ok: false as const, error: 'Unauthorized' }
    }

    if (!leadData.subid1?.trim()) {
        return { ok: false as const, error: 'Nickname (subid1) is required' }
    }

    const result = await postLead(leadData)

    if (!result) {
        return { ok: false as const, error: 'Failed to insert lead' }
    }

    return { ok: true as const, id: result.id }
}
