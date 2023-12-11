import ProgramCard from '@/components/program/ProgramCard';
import getPrograms from '@/lib/dbOperations/getPrograms';
import { fakeSetTimeOut } from '@/utils/fakeSetTimeOut';
import React from 'react';

type Props = {
    userNickname: string;
};

const ProgrammsContainer = async (props: Props) => {
    const programms = await getPrograms({
        orderBy: 'cpaUser',
        ascending: false,
    });

    // await fakeSetTimeOut(1000)
    
    return (
        <section className="mb-4  mt-4 flex flex-col gap-4">
            {programms?.map((programm) => (
                <ProgramCard props={programm} nickname={props.userNickname} key={programm.id} />
            ))}
        </section>
    );
};

export default ProgrammsContainer;
