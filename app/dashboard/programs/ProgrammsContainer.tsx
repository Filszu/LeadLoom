import ProgramCard from '@/components/program/ProgramCard';
import ProgramsClient from '@/components/program/ProgramsClient';
import getPrograms from '@/lib/dbOperations/getPrograms';
import { fakeSetTimeOut } from '@/utils/fakeSetTimeOut';
import React from 'react';

type Props = {
    userNickname: string;
    orderBy?: string;
    ascending?: boolean;
};

const ProgrammsContainer = async (props: Props) => {
    const programms = await getPrograms({
        orderBy: props.orderBy ?? 'cpaUser',
        ascending: props.ascending ?? false,
    });

    // await fakeSetTimeOut(1000)

    return (
        <section className="mb-4  mt-4 flex flex-col gap-4">
            <ProgramsClient
                programs={programms ?? []}
                userNickname={props.userNickname}
            />
        </section>
    );
};

export default ProgrammsContainer;
