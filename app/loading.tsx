export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <>
            <section className="w-full flex flex-col gap-2 h-screen">
                <div className="flex h-full items-center justify-center space-x-2">
                    <div className="w-4 h-4 bg-violet-600 dark:bg-violet-400 rounded-full animate-pulse"></div>
                    <div className="w-4 h-4 bg-violet-600 dark:bg-violet-400 rounded-full animate-pulse"></div>
                    <div className="w-4 h-4 bg-violet-600 dark:bg-violet-400 rounded-full animate-pulse"></div>
                </div>
            </section>
        </>
    );
}
