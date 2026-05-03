import { Slot, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

import { getCurrentProfile } from "@/lib/get-current-profile";

export default function AdminLayout() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    async function checkAccess() {
      const profile = await getCurrentProfile();

      if (!profile) {
        router.replace("/auth/sign-in");
        return;
      }

      if (profile.role !== "admin") {
        router.replace("/");
        return;
      }

      setIsChecking(false);
    }

    checkAccess();
  }, [router]);

  if (isChecking) {
    return (
      <View className="flex-1 items-center justify-center bg-slate-50">
        <ActivityIndicator />
      </View>
    );
  }

  return <Slot />;
}