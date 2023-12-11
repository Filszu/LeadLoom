
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
console.log("------------------------")

const dbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const dbAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY



const supabase = createClient(
    dbUrl!,
    dbAnonKey!
)


export default supabase