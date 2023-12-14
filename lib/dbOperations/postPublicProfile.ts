import { PublicUser } from "@/types";
import supabase from "@/utils/supabase/sbClient";
import { error } from "console";

export default async function postPublicProfile(props:PublicUser) {
    
    const { userId, first_name, last_name, nickname } = props;
    
    const { data: publicProfiles, error: publicProfilesError } = await supabase
        .from('profiles')
        .insert([
            {
                id: `${userId}`,
                first_name: `${first_name}`,
                last_name: `${last_name}`,
                nickname: `${nickname}`,
            },
        ])
        // .select();

        if(publicProfilesError) {
            console.log(publicProfilesError)
            return null
        }

        return 1
}
