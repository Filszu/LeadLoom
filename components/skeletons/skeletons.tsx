import React from 'react';

type Props = {};

const TableSkeleton = () => {
    return (
        <div
            role="status"
            className="mb-10 mt-10 w-full animate-pulse space-y-4 divide-y divide-gray-200 rounded-lg border border-gray-200 border-opacity-60 p-4 shadow dark:divide-gray-700 dark:border-gray-700 md:p-6"
        >
            <div className="flex items-center justify-between">
                <div>
                    <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                    <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
                <div>
                    <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                    <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
                <div>
                    <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                    <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
                <div>
                    <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                    <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
                <div>
                    <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                    <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    );
};
const ChartSkeleton = () => {
    return (
        <div
            role="status"
            className="w-full animate-pulse rounded border border-gray-200 p-4 shadow dark:border-gray-700 md:p-6"
        >
            <div className="mb-2.5 h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="mb-10 h-2 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="mt-4 flex items-baseline">
                <div className="h-72 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-6 h-56 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-6 h-72 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-6 h-64 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-6 h-80 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-6 h-72 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-6 h-80 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-6 h-72 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-6 h-64 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-6 h-80 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-6 h-72 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-6 h-80 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-6 h-80 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-6 h-72 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-6 h-80 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-6 h-72 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-6 h-64 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-6 h-80 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-6 h-72 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
                <div className="ms-6 h-80 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    );
};

// proggram skeleton

const ProgramCardSkeletonContainer = () => {
    return (
        <section className="mb-4  mt-4 flex flex-col gap-4">
            <ProgramCardSkeleton />
            <ProgramCardSkeleton />
            <ProgramCardSkeleton />
        </section>
    );
};

const ProgramCardSkeleton = () => {
    return (
        <div className="overflow-hidden rounded-lg bg-gray-800 p-8 text-white shadow-lg ">
            <div
                role="status"
                className="animate-pulse space-y-8 rtl:space-x-reverse md:flex md:items-center md:space-x-8 md:space-y-0"
            >
                <div className="flex h-64 w-64 items-center justify-center rounded-md  bg-gray-300 dark:bg-gray-700 sm:w-96">
                    <svg
                        className="h-10 w-10 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 18"
                    >
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                </div>
                <div className="w-full">
                    <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                    <div className="mb-2.5 h-2 max-w-[480px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                    <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                    <div className="mb-2.5 h-2 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                    <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                    <div className="h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export {
    TableSkeleton,
    ChartSkeleton,
    ProgramCardSkeleton,
    ProgramCardSkeletonContainer,
};
