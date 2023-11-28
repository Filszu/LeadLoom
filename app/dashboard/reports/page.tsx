
import LeadTimelineChart from '@/components/charts/LeadsChart';
import LeadsTable from '@/components/leadsTable/LeadsTable'
import UserLeadsTable from '@/components/leadsTable/UserLeadsTable'
import getLeadsSummary from '@/lib/dbOperations/getLeadsSummary';
import { ApexOptions } from 'apexcharts';
import React from 'react'

const Reports = async() => {


    const leadsSummary = await getLeadsSummary({});


    const leadData= [
        {
            name: 'Lead A',
            data: [
                [new Date('2023-01-01').getTime(), 20],
                [new Date('2023-02-01').getTime(), 40],
                [new Date('2023-03-01').getTime(), 25],
                // Add more data points as needed
            ],
        },
        // Add more leads with data as needed
    ];

  return (
    <>
        <h1>Reports </h1>
        <LeadTimelineChart data={...leadData} />
        
        
    </>
  )
}

export default Reports 