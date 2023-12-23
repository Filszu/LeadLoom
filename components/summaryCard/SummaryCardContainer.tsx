import SummaryCard from "./SummaryCard";
import { TbMoneybag } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";
import { TbPigMoney } from "react-icons/tb";
import { GiThreeFriends } from "react-icons/gi";
import { IoGameControllerOutline } from "react-icons/io5";
import getUserLeadsSummary from "@/lib/dbOperations/getUserLeadsSummary";
import { UserLeadsSummary } from "@/types";

const SummaryCardContainer = async ({ userId }: { userId: string }) => {
    // ty zagrales (liczba gier)
    // twoich przyjaciol zagralo z twojego polecenia
    // calkowity przychod
    // wyplacopno

    const userLeadsSumamry = await getUserLeadsSummary({userID:userId});
    // console.log('userLeadsSumamry',userLeadsSumamry)

    // const userLeadsSumamry [
    //     {
    //       userId: '03c774e4-62ac-4279-a5c3-7d222e3d9fbb',
    //       status: 'accepted',
    //       lead_count: 1,
    //       total_value: 8
    //     },
    //     {
    //       userId: '03c774e4-62ac-4279-a5c3-7d222e3d9fbb',
    //       status: 'declined',
    //       lead_count: 1,
    //       total_value: 2
    //     },
    //     {
    //       userId: '03c774e4-62ac-4279-a5c3-7d222e3d9fbb',
    //       status: 'paidout',
    //       lead_count: 1,
    //       total_value: 5
    //     },
       
    //   ]
    if (!userLeadsSumamry) return <h2>Complete at least 1 challenge first</h2>;

    const paidout = userLeadsSumamry.find((item: UserLeadsSummary) => item.status === 'paidout');
    const accepted = userLeadsSumamry.find((item: UserLeadsSummary) => item.status === 'accepted');
    const pending = userLeadsSumamry.find((item: UserLeadsSummary) => item.status === 'pending');

   

    const totalEarnings = (paidout?.total_value ?? 0) + (accepted?.total_value ?? 0) + (pending?.total_value ?? 0);

    const totalEarnings_accepted_paidout = (paidout?.total_value ?? 0) + (accepted?.total_value ?? 0) ;

    console.log('totalEarnings',totalEarnings)

    const completedChallenges = (paidout?.lead_count ?? 0) + (accepted?.lead_count ?? 0) + (pending?.lead_count ?? 0);




    
    return (
        <section className="flex my-5 gap-2 flex-wrap justify-between">
            <SummaryCard
                
                value={completedChallenges}
                title={'completed challenges'}
                description={'your friends that played on your recommendation'}
                icon={<IoGameControllerOutline />}
            />
            <SummaryCard
                
                value={0}
                title={'invited friends'}
                description={'your friends that played on your recommendation'}
                icon={<GiThreeFriends/>}
            />

             <SummaryCard
              
                value={totalEarnings}
                title={'total rewards'}
                description={''}
                currency="PLN"
                icon={<TbMoneybag />}

            />
            <SummaryCard
                currency="PLN"
                value={paidout?.total_value ?? 0}
                title={'Paid out rewards'}
                description={''}
                icon={<TbPigMoney />}
            />
        </section>
    );
};

export default SummaryCardContainer;
