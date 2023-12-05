import SummaryCard from "./SummaryCard";

const SummaryCardContainer = ({ userId }: { userId: string }) => {
    // ty zagrales
    // twoich przyjaciol zagralo z twojego polecenia
    // calkowity przychod
    // wyplacopno
    return (
        <section>
             <SummaryCard
                userId={userId}
                value={10}
                title={'total rewards'}
                description={'Sss'}
            />
            <SummaryCard
                userId={userId}
                value={10}
                title={'total rewards'}
                description={'Sss'}
            />
        </section>
    );
};

export default SummaryCardContainer;
