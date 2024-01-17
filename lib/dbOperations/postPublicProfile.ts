import { PublicUser } from "@/types";
import supabase from "@/utils/supabase/sbClient";
import { error } from "console";

export default async function postPublicProfile(props:PublicUser) {
    
    const { id, first_name, last_name, nickname, referred_by } = props;
    
    const { data: publicProfiles, error: publicProfilesError } = await supabase
        .from('profiles')
        .insert([
            {
                id: `${id}`,
                first_name: `${first_name}`,
                last_name: `${last_name}`,
                nickname: `${nickname}`,
                referred_by: `${referred_by}`,
                
            },
        ])
        // .select();

        if(publicProfilesError) {
            console.log(publicProfilesError)
            return null
        }

        return 1
}
