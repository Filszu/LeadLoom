'use client';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { redirect } from 'next/navigation';
import { TbArrowsDown, TbArrowsUp } from 'react-icons/tb';
import { useRouter } from 'next/navigation'
interface Props {
    orderBy: string;
    ascending: boolean;
}
const FilterSettings = (props:Props) => {
    const router = useRouter()

    return (
        <form action="" className='flex gap-5'>
            <Select
                defaultValue={props.orderBy}
                onValueChange={(value) => {
                    // redirect(`?orderBy=${value}`);
                    router.push(`?orderBy=${value}`)
                }}
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Reward Value" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="cpaUser">Reward Value</SelectItem>
                    <SelectItem value="time">Challege time</SelectItem>
                    <SelectItem value="platform">Platform
                    
                    </SelectItem>
                    <SelectItem value="status">Status</SelectItem>
                    <SelectItem value="created_at">Created at</SelectItem>

                    <SelectItem value="programName">Program Name</SelectItem>

                    <SelectItem value="position">
                        Promoted position Position
                    </SelectItem>
                </SelectContent>
            </Select>
            <Select
                defaultValue={props.ascending ? 'true' : 'false'}
                
                onValueChange={(value) => {
                    // redirect(`&ascending=${value}`);
                    router.push(`?orderBy=${props.orderBy}&ascending=${value}`)
                }}
            >
                <SelectTrigger className="w-[80px]">
                    <SelectValue placeholder="ascending" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="true"><TbArrowsUp /></SelectItem>
                    <SelectItem value="false"><TbArrowsDown /></SelectItem>
                    
                </SelectContent>
            </Select>
        </form>
    );
};

export default FilterSettings;
