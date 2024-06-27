import SubmitButton from '@/components/ui/custom/SubmitButton';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import getUserProfiles from '@/lib/dbOperations/getUserProfiles';
import { profiles } from '@/types';
import { redirect } from 'next/navigation'
type Props = {
    userId: string;
};

const UserProfileForm = async (props: Props) => {
    const users = await getUserProfiles({ limit: 1000 });
    if (users) {
        const profiles: profiles[] = users;

        async function handleSearch(FormData: FormData) {
            "use server"
            const userId = FormData.get('userId');
            console.log(userId);
            redirect(`./${userId}`)
        }
        return (
            <form action={handleSearch} className='flex gap-1'>
                
                <Select name='userId'>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder={props.userId} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>users</SelectLabel>
                            {profiles.map((user) => (
                                <SelectItem key={user.id} value={user.id}>
                                    <b>{user.nickname}</b> ({user.id})
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <SubmitButton submittingText="Searching...">
                    Search user
                </SubmitButton>
            </form>
        );
    }
};

export default UserProfileForm;
