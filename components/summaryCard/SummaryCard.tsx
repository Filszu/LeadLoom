import React from 'react';

interface ISummmaryCardProps {
    currency?: string;
    value: number;
    title: string;
    description: string;
    icon?: React.ReactNode;
}

const SummaryCard = (props: ISummmaryCardProps) => {
    const { currency, value, title, description, icon } = props;
    // ty zagrales
    // twoich przyjaciol zagralo z twojego polecenia
    // calkowity przychod
    // wyplacopno
    return (
        // <div className="flex w-full flex-col justify-between overflow-clip rounded-lg border-2 border-primary sm:w-1/2 lg:w-2lg">
        <div className=" flex w-full flex-col justify-between overflow-clip rounded-lg border-2 border-primary sm:w-60 lg:w-2/12">
            <div className="flex items-center justify-center gap-1 p-8">
                <div className="text-5xl text-primary">{icon}</div>

                <h3 className="text-3xl font-bold">
                    {value} {currency}
                </h3>
            </div>
            <div className="bg-primary p-2 text-center">{title}</div>
        </div>
    );
};

export default SummaryCard;
