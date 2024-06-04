'use server'

import supabase from "@/config/supaBaseClient"
import { Lead } from "@/database.types"
import { UserLead, IUserLeadExtended, IqueryProps, IUserLeadWithLeads } from "@/types"







export default async function getLeads(props: IqueryProps) {

    try{
        let { data: leads, error } = await supabase
        .from('leads')
        .select('*').order(props.orderBy || 'created_at', { ascending: props.ascending || false } )
        .limit(props.limit || 5)

        return leads as Lead[]
    }catch(error){
        console.error(error)
    }

        
   

}


export async function getUserLeads(props: IqueryProps) {

    if (!props.userID) return null;
    try {
        let { data: userLeads, error } = await supabase
            .from('userLeads')
            .select('*, programms(programName)')
            .order(props.orderBy || 'created_at', { ascending: props.ascending || false })
            .eq('userId', props.userID)
            .limit(2)
    
        if (error) {
            console.error(error);
            return null;
        }
    
        // Fetch related leads for each userLead
        const leadsWithRelatedLeads = await Promise.all(
            userLeads.map(async (userLead) => {
                const { data: relatedLeads, error: leadsError } = await supabase
                    .from('leads')
                    .select('*')
                    .eq('id', userLead.leadId);
    
                if (leadsError) {
                    console.error(leadsError);
                    return { ...userLead, relatedLeads: [] };
                }
    
                return { ...userLead, relatedLeads: relatedLeads || [] };
            })
        );
        console.log("-----------------")
        console.log(leadsWithRelatedLeads[0].relatedLeads[0])
    
        return leadsWithRelatedLeads as IUserLeadWithLeads[];
    
    } catch (error) {
        console.error(error);
        return null;
    }
    
        
   

}
