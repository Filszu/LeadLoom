import Link from 'next/link';
import React from 'react';

const AdminPage = () => {
    return (
        <section>
            <div>AdminPage</div>
            <Link href={'./admin/user-leads-control'} >
               User Leads Control
               </Link>
        </section>
    );
};

export default AdminPage;
