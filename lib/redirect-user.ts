import { Router } from "expo-router";

import { supabase } from "@/lib/supabase";

export async function redirectUserByRole(router: Router) {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.user) {
    router.replace("/");
    return;
  }

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", session.user.id)
    .single();

  if (error || !profile) {
    router.replace("/");
    return;
  }

  if (profile.role === "customer") {
    router.replace("/customer/home");
    return;
  }

  if (profile.role === "provider") {
    router.replace("/provider/home");
    return;
  }

  if (profile.role === "admin") {
    router.replace("/admin/home");
    return;
  }

  router.replace("/");
}