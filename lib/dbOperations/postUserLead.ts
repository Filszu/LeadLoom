import supabase from '@/config/supaBaseClient';

import { IAdmitadLead, UserLead } from '@/types';

export default async function postUserLead({
    leadData, leadId,
}: {
    leadData: IAdmitadLead, leadId: number,
}) {
    const { offer_id, subid1, subid2, subid } = { ...leadData };

    const userNickname = subid1;


   
        


    if (userNickname && offer_id && subid==="leadloom") {

        let { data: profiles, error } = await supabase
            .from('profiles')
            .select('id, nickname')
            .eq('nickname', userNickname)
            .limit(1);


            
        


        if (error || !profiles || profiles.length === 0) {
            console.error(error??'no profiles');
            return null;
        }
        console.log('profiles', profiles);

        

        console.log(offer_id)
        let { data: programms, error:error2 } = await supabase
        .from('programms')
        .select('cpaUser,cpaUserPL,id')
        .eq('admitadID', offer_id)
        .limit(1)

        if (error2 || !programms || programms.length === 0) {
            
            console.error(error2??'no programms');
            return null;
        }

        console.log('programms', programms);

        const { data, error:insertError } = await supabase
        .from('userLeads')
        .insert([
        { 
            userId: profiles[0].id,
            programmId: programms[0].id,
            userRef1: subid1,
            userRef2: subid2??null,
            status: 'pending',
            leadId: leadId,
            // currency: leadData.currency??null,
            currency: "PLN",
            value: programms[0].cpaUserPL,
        },
        ])
        .select()



        


        

        // insert user lead
                      
        
    }
}

