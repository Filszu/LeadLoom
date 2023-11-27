'use client'
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from "apexcharts";


const TimelineChart = () => {
  const options:ApexOptions = {
    chart: {
      type: 'rangeBar',
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      type: 'datetime',
    },
  };

  const series = [
    {
      data: [
        {
          x: 'Task 1',
          y: [new Date('2023-01-01').getTime(), new Date('2023-01-05').getTime()],
        },
        {
          x: 'Task 2',
          y: [new Date('2023-01-03').getTime(), new Date('2023-01-10').getTime()],
        },
        // Add more data as needed
      ],
    },
  ];

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="rangeBar"
      height="350"
    />
  );
};

export default TimelineChart;
