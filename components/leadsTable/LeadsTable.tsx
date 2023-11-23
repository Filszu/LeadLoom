import getLeads from '@/lib/dbOperations/getLeads'
import { Lead } from '@/types'
import React from 'react'
import { DataTable } from './DataTable'

const LeadsTable = async() => {


const leads:Lead[] = await getLeads({})??[]



  return (
    <div>LeadsTable

    {/* {leads&&leads.map((lead) => (
        <div key={lead.id}>
          <h2>{lead.id}</h2>
          <p>{lead.offer_name}</p>   
        </div>
        ))} */}
    
    <DataTable data={leads} />

    
    

    </div>
  )
}

export default LeadsTable