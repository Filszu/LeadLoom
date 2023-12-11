function fillMissingDays(data: [number, number][]): [number, number][] {
    const result: [number, number][] = [];

    // Convert existing dates to a Set for quick lookup
    const existingDatesSet = new Set(data.map(([date]) => date));

    // Assuming leadsReport is an array of objects with a 'date' property
    const allDates = leadsReport.map((entry) => new Date(entry.date!).getTime());

    // Iterate through allDates and fill in missing days with zero values
    allDates.forEach((date) => {
        if (existingDatesSet.has(date)) {
            // Use the existing data if the date is present
            result.push([date, data.find(([existingDate]) => existingDate === date)![1]]);
        } else {
            // Fill in missing days with zero values
            result.push([date, 0]);
        }
    });

    return result;
}