import { Database } from "./database.types";


export interface IAdmitadLead {
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


export type TableLead = {
    id: string|number,
    created_at: string,
    offer_name?: string | null,
    payment_status?: string | null,
    subid?: string | null;
    subid1?: string | null;
    subid2?: string | null;
    currency?: string | null;
    // Other params
    [key: string]: any;
    

}


export type Lead = Database["public"]["Tables"]["leads"]["Row"] & {
    // Other params
    [key: string]: any;
}
