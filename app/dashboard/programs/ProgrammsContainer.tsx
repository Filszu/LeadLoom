import ProgramCard from '@/components/program/ProgramCard'
import getPrograms from '@/lib/dbOperations/getPrograms'
import React from 'react'

type Props = {}

const ProgrammsContainer = async(props: Props) => {

    const programms = await getPrograms({})
  return (
    <section>
        {programms?.map((programm) => (
            <ProgramCard {...programm} key={programm.id} />  
            
        ))  
        }
    </section>
  )
}

export default ProgrammsContainer