import LeadsTable from '@/components/leadsTable/LeadsTable'
import UserLeadsTable from '@/components/leadsTable/UserLeadsTable'
import React from 'react'

const Dashboard = () => {
  return (
    <>
        <h1>Dashboard</h1>
        <UserLeadsTable />
        <hr /><hr />
        <LeadsTable />
    </>
  )
}

export default Dashboard 