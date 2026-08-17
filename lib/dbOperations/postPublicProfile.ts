import { PublicUser } from "@/types";
import supabase from "@/utils/supabase/sbClient";
import grantWelcomeBonus from "@/lib/dbOperations/grantWelcomeBonus";

export default async function postPublicProfile(props:PublicUser) {
    
    const { id, first_name, last_name, nickname, referred_by } = props;
    const referredBy = referred_by && referred_by !== 'null' ? referred_by : null;
    
    const { data: publicProfiles, error: publicProfilesError } = await supabase
        .from('profiles')
        .insert([
            {
                id: `${id}`,
                first_name: `${first_name}`,
                last_name: `${last_name}`,
                nickname: `${nickname}`,
                referred_by: referredBy,
                
            },
        ])
        // .select();

        if(publicProfilesError) {
            console.log(publicProfilesError)
            return null
        }

        if (nickname) {
            await grantWelcomeBonus({
                nickname,
                referredBy,
            });
        }

        return 1
}
