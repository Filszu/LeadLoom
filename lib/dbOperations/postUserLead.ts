import supabase from '@/config/supaBaseClient';

import { IAdmitadLead, UserLead } from '@/types';

export default async function postUserLead({
    leadData,
    leadId,
}: {
    leadData: IAdmitadLead;
    leadId: number;
}) {
    const { offer_id, subid1, subid2, subid, country_code } = { ...leadData };

    const userNickname = subid1;
    let country = "PL";
    if(country_code==="US"){
        country = "US";
    }
    else if(country_code==="DE"){
        country = "DE";

    }
    

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
            .select('cpaUser,cpaUserPL,cpaUserWEU,id, programID')
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
        let leadDescription = null;


        if (userLeads && userLeads.length > 0) {
            const lastLeadDate = new Date(userLeads[0].created_at);
            const today = new Date();
            const diffTime = Math.abs(today.getTime() - lastLeadDate.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            joinedDaysAgo = diffDays;
        }

        
        if (joinedDaysAgo < 94 && joinedDaysAgo !==0) {
            shouldValidTheLead = false;
            leadDescription = `duplicate / confirmation`;
        }
        console.log('joinedDaysAgo', joinedDaysAgo);
        console.log('shouldValidTheLead', shouldValidTheLead);

        // valide the sum to pay and currency
        let value=0, currency="USD";
        if(shouldValidTheLead){
            if(country === "PL"){
                value = programms[0].cpaUserPL??0;
                currency = "PLN";
            }
            else if(country === "US"){
                value = programms[0].cpaUser??0;
                currency = "USD";
            }
            else if(country === "DE"){
                value = programms[0].cpaUserWEU??0;
                currency = "USD";
            }
        }

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
                    currency: currency,
                    value: !shouldValidTheLead? 0 : value,
                    offer_name: programIDName??"",
                    description: leadDescription,
                },
            ])
            // .select();

        // insert user lead
        // console.log('userLead', data);
        // console.log('insertError', insertError);
    }

    
}
