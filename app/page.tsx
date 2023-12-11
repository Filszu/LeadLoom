import supabase from '@/config/supaBaseClient';
import { cookies } from 'next/headers';
import Link from 'next/link';
// export const dynamic = "force-dynamic"

export default async function Home() {
    return (
        <>
            <Link href="/dashboard">Dashboard</Link>
        </>
    );
}
