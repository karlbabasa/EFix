import { Slot, usePathname, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

import { ProviderBottomNav } from "@/components/provider/navigation/ProviderBottomNav";
import { ProviderHeader } from "@/components/provider/navigation/ProviderHeader";
import { getCurrentProfile } from "@/lib/get-current-profile";

export default function ProviderLayout() {
  const pathname = usePathname();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  const isProviderRoute = pathname.startsWith("/provider");
  const isProviderStart = pathname === "/provider/start";

  useEffect(() => {
    let isMounted = true;

    async function checkAccess() {
      setIsChecking(true);

      if (!isProviderRoute || isProviderStart) {
        if (isMounted) {
          setIsChecking(false);
        }
        return;
      }

      const profile = await getCurrentProfile();

      if (!isMounted) return;

      if (!profile) {
        router.replace("/auth/sign-in");
        return;
      }

      if (profile.role !== "provider" && profile.role !== "admin") {
        router.replace("/");
        return;
      }

      setIsChecking(false);
    }

    checkAccess();

    return () => {
      isMounted = false;
    };
  }, [pathname, isProviderRoute, isProviderStart, router]);

  if (isChecking) {
    return (
      <View className="flex-1 items-center justify-center bg-slate-50">
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-slate-50">
      {isProviderRoute && !isProviderStart ? <ProviderHeader /> : null}

      <View className="flex-1">
        <Slot />
      </View>

      {isProviderRoute && !isProviderStart ? <ProviderBottomNav /> : null}
    </View>
  );
}