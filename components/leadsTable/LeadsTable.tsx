
import getLeads from '@/lib/dbOperations/getLeads'
import { Lead, TableLead } from '@/types'
import React from 'react'
import { DataTable } from './DataTable'

const LeadsTable = async() => {


const leads:Lead[] = await getLeads({limit:15})??[]

  
  const tableLeads:TableLead[] = [...leads]

  // const tableLeads: TableLead[] = leads.map((lead) => ({
  //   ...lead,
  //   id: String(lead.id),
  // }));
  

  // console.log(tableLeads)








  return (
    <div>LeadsTable

    {/* {leads&&leads.map((lead) => (
        <div key={lead.id}>
          <h2>{lead.id}</h2>
          <p>{lead.offer_name}</p>   
        </div>
        ))} */}
    
    <DataTable data={tableLeads} />

    
    

    </div>
  )
}

export default LeadsTable