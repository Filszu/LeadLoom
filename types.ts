import { Database } from "./database.types";


interface IAdmitadLead {
    action: string;
    action_id: string;
    admitad_id: string;
    click_time?: string;
    conversion_time?: string;
    country_code?: string;
    currency?: string;
    offer_id?: string;
    offer_name?: string;
    order_id?: string;
    order_sum?: string;
    payment_status?: string;
    payment_sum?: string;
    reward_ready?: string;
    subid?: string;
    subid1?: string;
    subid2?: string;
    subid3?: string;
    subid4?: string;
    time?: string;
    type?: string;
    user_agent?: string;
    user_referer?: string;
    website_id?: string;
    website_name?: string;
}


export type Lead = Database["public"]["Tables"]["leads"]["Row"]