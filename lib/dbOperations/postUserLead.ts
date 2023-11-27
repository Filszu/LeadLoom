import supabase from '@/config/supaBaseClient';

import { IAdmitadLead, UserLead } from '@/types';

export default async function postUserLead({
    leadData,
}: {
    leadData: IAdmitadLead;
}) {
    const { offer_id, subid1, subid2 } = { ...leadData };

    const userNickname = subid1;


   
        


    if (userNickname && offer_id) {

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



        


        

        // insert user lead
                      
        
    }
}

