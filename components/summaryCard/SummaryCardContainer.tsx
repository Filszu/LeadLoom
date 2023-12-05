import SummaryCard from "./SummaryCard";
import { TbMoneybag } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";
import { TbPigMoney } from "react-icons/tb";
import { GiThreeFriends } from "react-icons/gi";
import { IoGameControllerOutline } from "react-icons/io5";

const SummaryCardContainer = ({ userId }: { userId: string }) => {
    // ty zagrales (liczba gier)
    // twoich przyjaciol zagralo z twojego polecenia
    // calkowity przychod
    // wyplacopno
    return (
        <section className="flex my-5 gap-2 flex-wrap justify-between">
            <SummaryCard
                
                value={12}
                title={'invited friends'}
                description={'your friends that played on your recommendation'}
                icon={<IoGameControllerOutline />}
            />
            <SummaryCard
                
                value={12}
                title={'invited friends'}
                description={'your friends that played on your recommendation'}
                icon={<GiThreeFriends/>}
            />

             <SummaryCard
              
                value={10}
                title={'total rewards'}
                description={''}
                currency="PLN"
                icon={<TbMoneybag />}

            />
            <SummaryCard
                currency="PLN"
                value={109}
                title={'Paid out rewards'}
                description={''}
                icon={<TbPigMoney />}
            />
        </section>
    );
};

export default SummaryCardContainer;
