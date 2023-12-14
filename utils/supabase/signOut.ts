"use server";

import { redirect } from "next/navigation";
import { createClient_server } from "./server";

export async function signOut() {
    const supabase = await createClient_server();
    await supabase.auth.signOut();
    redirect("/");
} 