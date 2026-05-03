import { supabase } from "@/lib/supabase";

export type CurrentProfile = {
  id: string;
  role: "customer" | "provider" | "admin";
};

export async function getCurrentProfile(): Promise<CurrentProfile | null> {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.user) {
    return null;
  }

  const { data, error } = await supabase
    .from("profiles")
    .select("id, role")
    .eq("id", session.user.id)
    .single();

  if (error || !data) {
    return null;
  }

  return data as CurrentProfile;
}