import ProgramCard from '@/components/program/ProgramCard'
import getPrograms from '@/lib/dbOperations/getPrograms'
import React from 'react'

type Props = {}

const ProgrammsContainer = async(props: Props) => {

    const programms = await getPrograms({})
  return (
    <section className='mt-4 mb-4 flex flex-col gap-4 '>
        {programms?.map((programm) => (
            <ProgramCard {...programm} key={programm.id} />  

        ))  
        }
    </section>
  )
}

export default ProgrammsContainer