import getLeadsSummary from '@/lib/dbOperations/getLeadsSummary';
import { ILeadTimelineChartPropsItem, TLeadTimelineChartProps } from '@/types';
import React from 'react';
import LeadTimelineChart from '../charts/LeadsChart';
import { fakeSetTimeOut } from '@/utils/fakeSetTimeOut';


type Props = {
    userId: string;
};

const LeadsChartSection = async (props: Props) => {
    // await fakeSetTimeOut(1000)

    const leadsReport = await getLeadsSummary({ userID: props.userId });

    // const leadsReport = [
    //     {
    //       date: '2023-11-27T00:00:00+00:00',
    //       lead_count: 6,
    //       total_value: 0.8,
    //       userId: '03c774e4-62ac-4279-a5c3-7d222e3d9fbb'
    //     },
    //     {
    //       date: '2023-11-28T00:00:00+00:00',
    //       lead_count: 1,
    //       total_value: 2,
    //       userId: '03c774e4-62ac-4279-a5c3-7d222e3d9fbb'
    //     }
    //   ];

    let leadsData: TLeadTimelineChartProps;

    if (!leadsReport) {
        return <p>No leads</p>;
    }

    // Prepare data for the chart
    // const leadCountData:ILeadTimelineChartPropsItem = {
    //     name: 'Leads Count',
    //     data: leadsReport.map((entry) => [
    //         new Date(entry.date!).getTime(),
    //         entry.lead_count!,
    //     ]),
    // };

    // const totalValueData:ILeadTimelineChartPropsItem = {
    //     name: 'Total Leads Value (in $ / PLN)',
    //     data: leadsReport.map((entry) => [
    //         new Date(entry.date!).getTime(),
    //         entry.total_value!,
    //     ]),
    // };

    function fillMissingDaysWithZero(data: [number, number][]): [number, number][] {
        const result: [number, number][] = [];
        
        // Assuming data is sorted by date
        const startDate = data.length > 0 ? data[0][0] : 0;
        const endDate = data.length > 0 ? data[data.length - 1][0] : 0;
    
        for (let date = startDate; date <= endDate; date += 24 * 60 * 60 * 1000) {
            const existingEntry = data.find(entry => entry[0] === date);
    
            if (existingEntry) {
                result.push(existingEntry);
            } else {
                result.push([date, 0]);
            }
        }
    
        return result;
    }
    
    // Example usage
    const leadCountData: ILeadTimelineChartPropsItem = {
        name: 'Leads Count',
        data: fillMissingDaysWithZero(leadsReport.map((entry) => [
            new Date(entry.date!).getTime(),
            entry.lead_count!,
        ])),
    };
    
    const totalValueData: ILeadTimelineChartPropsItem = {
        name: 'Total Leads Value (in $ / PLN)',
        data: fillMissingDaysWithZero(leadsReport.map((entry) => [
            new Date(entry.date!).getTime(),
            entry.total_value!,
        ])),
    };


 

    

    leadsData = [leadCountData, totalValueData];

    return (
        <section className="w-full">
            {1 === 1 ? <LeadTimelineChart data={leadsData} /> : <p>No leads</p>}
        </section>
    );
};

export default LeadsChartSection;
