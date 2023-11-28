// LeadTimelineChart.js
'use client';
// LeadTimelineChart.tsx
import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import {  TLeadTimelineChartProps } from '@/types';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});



const LeadTimelineChart
= ({data}:{data:TLeadTimelineChartProps }) => {
 





    // const [state, setState] = useState<LeadTimelineChartProps>(data);
    
    //   const handleReset = () => {
    //     setState((prevState) => ({
    //       ...prevState,
    //     }));
    //   };
    
    //   handleReset;

    const options: ApexOptions = {
        chart: {
            id: 'lead-timeline',
            type: 'area',
        },
        xaxis: {
            type: 'datetime',
        },
    };

    // NextJS Requirement
    const isWindowAvailable = () => typeof window !== 'undefined';

    if (!isWindowAvailable()) return <></>;

    return (
        <>
        <div>
            {/* <Chart options={options} series={data} type="area" height={350} /> */}

            
        </div>

        <div id="chartOne" className="h-[355px] w-[100%]">
          <ReactApexChart
            options={options}
            series={data}
            type="area"
            width="100%"
            height="100%"
          />
        </div>

        
        </>
    );
};

export default LeadTimelineChart;
