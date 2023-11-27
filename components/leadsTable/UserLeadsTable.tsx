
import getLeads, { getUserLeads } from '@/lib/dbOperations/getLeads'
import { IUserLeadExtended, Lead, TableLead, UserLead } from '@/types'
import React from 'react'

import { DataTableUserLeads } from './DataTableUserLeads'

const LeadsTable = async() => {

    const leads:IUserLeadExtended[] = await getUserLeads({limit:50})??[]

    const modifiedLeads = leads.map((lead) => {
        return {
            ...lead,
            programName: lead.programms.programName
        };
    });

    const tableLeads:IUserLeadExtended[] = modifiedLeads;
    

  console.log(tableLeads)








  return (
    <div>LeadsTable

    {/* {leads&&leads.map((lead) => (
        <div key={lead.id}>
          <h2>{lead.id}</h2>
          <p>{lead.offer_name}</p>   
        </div>
        ))} */}
    
    <DataTableUserLeads data={tableLeads} />

    
    

    </div>
  )
}

export default LeadsTable