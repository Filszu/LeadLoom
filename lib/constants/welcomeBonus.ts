import { IAdmitadLead } from '@/types'

export const WELCOME_BONUS_OFFER_ID = '1'

function pad(value: number) {
    return String(value).padStart(2, '0')
}

export function formatNicknameDate(nickname: string) {
    if (!nickname.trim()) return ''
    const now = new Date()
    return `${nickname.trim()}_${pad(now.getDate())}_${pad(now.getMonth() + 1)}_${String(now.getFullYear()).slice(-2)}`
}

export function buildWelcomeBonusLead({
    nickname,
    action,
    subid2 = '',
    subid3,
    payment_sum,
    paymentStatus = 'approved',
}: {
    nickname: string
    action: 'step1' | 'step2'
    subid2?: string
    subid3?: string
    paymentStatus?: string
    payment_sum?: string
}): IAdmitadLead {
    const now = String(Math.floor(Date.now() / 1000))
    const systemId = `welcome-${action}-${nickname}-${Date.now()}`

    return {
        action,
        action_id: systemId,
        admitad_id: WELCOME_BONUS_OFFER_ID,
        click_time: now,
        conversion_time: now,
        country_code: 'PL',
        currency: 'USD',
        offer_id: WELCOME_BONUS_OFFER_ID,
        offer_name: 'welcomeBonus',
        order_id: '',
        order_sum: '1',
        payment_status: paymentStatus,
        payment_sum: payment_sum ?? '0',
        reward_ready: '1',
        subid: 'LL',
        subid1: nickname,
        subid2,
        subid3: subid3 || formatNicknameDate(nickname),
        subid4: '',
        time: now,
        type: 'system',
        user_agent: 'welcome-bonus',
        user_referer: 'registration',
        website_id: '',
        website_name: 'LeadLoom',
    }
}
