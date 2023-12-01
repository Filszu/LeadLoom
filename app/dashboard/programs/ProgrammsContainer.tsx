import ProgramCard from '@/components/program/ProgramCard';
import getPrograms from '@/lib/dbOperations/getPrograms';
import React from 'react';

type Props = {};

const ProgrammsContainer = async (props: Props) => {
    const programms = await getPrograms({
        orderBy: 'cpaUser',
        ascending: true,
    });
    return (
        <section className="mb-4  mt-4 flex flex-col gap-4">
            {programms?.map((programm) => (
                <ProgramCard {...programm} key={programm.id} />
            ))}
        </section>
    );
};

export default ProgrammsContainer;
