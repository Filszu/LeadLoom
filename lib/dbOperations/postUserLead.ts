import supabase from '@/config/supaBaseClient';

import { IAdmitadLead, UserLead } from '@/types';

export default async function postUserLead({
    leadData,
    leadId,
}: {
    leadData: IAdmitadLead;
    leadId: number;
}) {
    const { offer_id, subid1, subid2, subid } = { ...leadData };

    const userNickname = subid1;

    if (userNickname && offer_id && subid === 'leadloom') {
        let { data: profiles, error } = await supabase
            .from('profiles')
            .select('id, nickname')
            .eq('nickname', userNickname)
            .limit(1);

        if (error || !profiles || profiles.length === 0) {
            console.error(error ?? 'no profiles');
            return null;
        }
        console.log('profiles', profiles);

        console.log(offer_id);
        let { data: programms, error: error2 } = await supabase
            .from('programms')
            .select('cpaUser,cpaUserPL,id, programID')
            .eq('admitadID', offer_id)
            .limit(1);

        if (error2 || !programms || programms.length === 0) {
            console.error(error2 ?? 'no programms');
            return null;
        }

        console.log('programms', programms);

        const programId = programms[0].id;
        const programIDName = programms[0].programID;

        let { data: userLeads } = await supabase
            .from('userLeads')
            .select('programmId, created_at')
            .eq('programmId', programId)
            .eq('userId', profiles[0].id)
            .order('created_at', { ascending: false })
            .limit(1);

        // check if user has already lead for this programm in last 30 days then income -> 0

        let shouldValidTheLead = true;
        let joinedDaysAgo = 0;


        if (userLeads && userLeads.length > 0) {
            const lastLeadDate = new Date(userLeads[0].created_at);
            const today = new Date();
            const diffTime = Math.abs(today.getTime() - lastLeadDate.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            joinedDaysAgo = diffDays;
        }

        
        if (joinedDaysAgo < 30 && joinedDaysAgo !==0) {
            shouldValidTheLead = false;
        }
        console.log('joinedDaysAgo', joinedDaysAgo);
        console.log('shouldValidTheLead', shouldValidTheLead);

        const { data, error: insertError } = await supabase
            .from('userLeads')
            .insert([
                {
                    userId: profiles[0].id,
                    programmId: programms[0].id,
                    userRef1: subid1,
                    userRef2: subid2 ?? null,
                    status: 'pending',
                    leadId: leadId,
                    // currency: leadData.currency??null,
                    currency: 'PLN',
                    value: !shouldValidTheLead? 0 : programms[0].cpaUserPL,
                    offer_name: programIDName??""
                },
            ])
            .select();

        // insert user lead
    }
}
