
import LeadTimelineChart from '@/components/charts/LeadsChart';
import LeadsTable from '@/components/leadsTable/LeadsTable'
import UserLeadsTable from '@/components/leadsTable/UserLeadsTable'
import getLeadsSummary from '@/lib/dbOperations/getLeadsSummary';
import { ApexOptions } from 'apexcharts';
import React from 'react'

const Reports = async() => {


    const leadsSummary = await getLeadsSummary({});

    const leadsReport = [
        {
          date: '2023-11-27T00:00:00+00:00',
          lead_count: 6,
          total_value: 0.8,
          userId: '03c774e4-62ac-4279-a5c3-7d222e3d9fbb'
        },
        {
          date: '2023-11-28T00:00:00+00:00',
          lead_count: 1,
          total_value: 2,
          userId: '03c774e4-62ac-4279-a5c3-7d222e3d9fbb'
        }
      ];
    
      // Prepare data for the chart
      const leadCountData = {
        name: 'Lead Count',
        data: leadsReport.map(entry => [new Date(entry.date).getTime(), entry.lead_count]),
      };
    
      const totalValueData = {
        name: 'Total Value',
        data: leadsReport.map(entry => [new Date(entry.date).getTime(), entry.total_value]),
      };
    
      const leadsData = [leadCountData, totalValueData];

  return (
    <>
        <h1>Reports </h1>
        <LeadTimelineChart data={leadsData} />
        
        
    </>
  )
}

export default Reports 