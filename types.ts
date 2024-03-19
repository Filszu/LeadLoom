import { StaticImageData } from "next/image";
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

// query props

export interface IqueryProps{
    userID?: string,
    limit?: number,
    startFrom?: number,
    orderBy?: string,
    order?: string,
    ascending?: boolean


}

export interface ILeadTimelineChartPropsItem {
    name: string;
    data: [number, number][];
}

// export interface ILeadTimelineChartProps {
//     data: ILeadTimelineChartPropsItem[];
//   }

export type TLeadTimelineChartProps  = ILeadTimelineChartPropsItem[]


// export interface ILeadTimelineChartProps {
//     data: {
//       name: string;
//       data: [number, number][];
//     }[];
//   }

export type TQA = {
    question: string | React.ReactNode  ,
    answer: string | React.ReactNode ,

}

export type TQAbox = TQA[]

export type Lead = Database["public"]["Tables"]["leads"]["Row"] & {
    // Other params
    [key: string]: any;
}

export interface Cookie {
    name: string,
    value?: string,
    option?: {
        maxAge: number,
        path: string,
        domain: string,
        expires: Date,
        httpOnly: boolean,
        secure: boolean,
        sameSite: string
    }
}

export interface IProgramHomePage {
    programName: string;
    description: string;
    img: string | StaticImageData;
    cpa: number;
    currency: string;
    id:number;

}

export type UserLead = Database["public"]["Tables"]["userLeads"]["Row"]


export type LeadsSummary = Database["public"]["Views"]["leads_summary"]["Row"];

export type Program = Database["public"]["Tables"]["programms"]["Row"]

export type PublicUser = Database["public"]["Tables"]["profiles"]["Row"]

export type UserLeadsSummary = Database["public"]["Views"]["leadssumstatus_summary"]["Row"]

export interface IUserLeadExtended extends UserLead {
    programms: {
        programName: string
    }
    programName?: string
}