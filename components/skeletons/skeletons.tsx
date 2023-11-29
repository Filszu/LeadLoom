import React from 'react';

type Props = {};

const TableSkeleton = () => {
    return (
        <div
            role="status"
            className="w-full p-4 mt-10 mb-10 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded-lg shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700 border-opacity-60"
        >
            <div className="flex items-center justify-between">
                <div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
                <div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
                <div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
                <div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
                <div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    );
};
const ChartSkeleton = () => {
    return(
        
<div role="status" className="w-full p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
    <div className="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    <div className="flex items-baseline mt-4">
        <div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
        <div className="w-full h-56 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
        <div className="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
        <div className="w-full h-64 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
        <div className="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
        <div className="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
        <div className="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
        <div className="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
        <div className="w-full h-64 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
        <div className="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
        <div className="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
        <div className="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
        <div className="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
        <div className="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
        <div className="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
        <div className="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
        <div className="w-full h-64 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
        <div className="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
        <div className="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
        <div className="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
    </div>
    <span className="sr-only">Loading...</span>
</div>

    )

}

export { TableSkeleton, ChartSkeleton };
