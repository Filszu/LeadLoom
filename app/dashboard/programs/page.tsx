
import ProgramCard from '@/components/program/ProgramCard';
import  { Suspense } from 'react';
import ProgrammsContainer from './ProgrammsContainer';

export const revalidate = 10;

const ProgramsPage = async () => {



    return (
        <>
            <h1>Programs</h1>
            <h2>Join to program and earn $$$*</h2>
            <p></p>
            <Suspense fallback={
            <>loading...</>}
            >

                <ProgrammsContainer />
                
                
               
            </Suspense>
        </>
    );
};

export default ProgramsPage;
