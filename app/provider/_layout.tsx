import { Slot, usePathname, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

import { ProviderBottomNav } from "@/components/provider/navigation/ProviderBottomNav";
import { ProviderHeader } from "@/components/provider/navigation/ProviderHeader";
import { getCurrentProfile } from "@/lib/get-current-profile";

const publicProviderRoutes = ["/provider/start"];

export default function ProviderLayout() {
  const pathname = usePathname();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  const isPublicProviderRoute = publicProviderRoutes.some((route) =>
    pathname.startsWith(route)
  );

  useEffect(() => {
    async function checkAccess() {
      if (isPublicProviderRoute) {
        setIsChecking(false);
        return;
      }

      const profile = await getCurrentProfile();

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
  }, [isPublicProviderRoute, router]);

  if (isChecking) {
    return (
      <View className="flex-1 items-center justify-center bg-slate-50">
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-slate-50">
      {!isPublicProviderRoute ? <ProviderHeader /> : null}

      <View className="flex-1">
        <Slot />
      </View>

      {!isPublicProviderRoute ? <ProviderBottomNav /> : null}
    </View>
  );
}