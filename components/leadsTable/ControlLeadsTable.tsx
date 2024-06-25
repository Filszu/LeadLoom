
// import getLeads, { getUserLeads } from '@/lib/dbOperations/getLeads'
import  { getUserLeads } from '@/lib/dbOperations/getLeadsControl'
import { IUserLeadExtended, IUserLeadWithLeads, Lead, TableLead, UserLead } from '@/types'
import React from 'react'

import { DataTableUserLeads } from './DataTableUserLeads'
import { fakeSetTimeOut } from '@/utils/fakeSetTimeOut'
import { DataTableUserLeadsControl } from './DataTableUserLeadsControl'

const LeadsTable = async({userId}:{userId:string}) => {

    // await fakeSetTimeOut(1000)

    const leads:IUserLeadWithLeads[] = await getUserLeads({limit:150, userID:userId})??[]

    const modifiedLeads = leads.map((lead) => {
        return {
            ...lead,
            programName: lead.programms.programName,
            leadsDetails: lead.leads
        };
    });

    const tableLeads:IUserLeadWithLeads[] = modifiedLeads;
    

  // console.log(tableLeads)








  return (
    <div>Your Challanges

    {/* {leads&&leads.map((lead) => (
        <div key={lead.id}>
          <h2>{lead.id}</h2>
          <p>{lead.offer_name}</p>   
        </div>
        ))} */}
    
    <DataTableUserLeadsControl data={tableLeads} />

    
    

    </div>
  )
}

export default LeadsTable