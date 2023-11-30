
import ProgramCard from '@/components/program/ProgramCard';
import  { Suspense } from 'react';

export const revalidate = 10;

const ProgramsPage = async () => {

    const ExampleProgramData = {
        admitadID: '123456',
        cons: ['Limited reach', 'High competition'],
        cpa: 10,
        cpaPL: 15,
        cpaUser: 8,
        cpaUserPL: 12,
        created_at: '2023-01-01',
        description: 'A sample program description.',
        id: 'program123',
        img: 'https://example.com/sample-image.jpg',
        programID: 'adprogram789',
        programName: 'Sample Program',
        pros: ['High commission', 'Quality products'],
        url: 'https://example.com/sample-program',
      };

    return (
        <>
            <h1>Programs</h1>
            <h2>Join to program and earn $$$*</h2>
            <p></p>
            <Suspense fallback={
            <>loading...</>}
            >
                <ProgramCard {...ExampleProgramData} 
                
                />
               
            </Suspense>
        </>
    );
};

export default ProgramsPage;
