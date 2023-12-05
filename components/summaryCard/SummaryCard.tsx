import React from 'react';

interface ISummmaryCardProps {
    userId: string;
    value: number;
    title: string;
    description: string;
    icon?: React.ReactNode;
}

const SummaryCard = (props: ISummmaryCardProps) => {
    const { userId, value, title, description, icon } = props;
    // ty zagrales
    // twoich przyjaciol zagralo z twojego polecenia
    // calkowity przychod
    // wyplacopno
    return (
        <div className="w-4/12 overflow-clip rounded-lg border-2 border-primary">
            <div className="p-8">
                <h3 className="text-3xl font-bold">{value} PLN</h3>
            </div>
            <div className="bg-primary p-2 text-center">{title}</div>
        </div>
    );
};

export default SummaryCard;
