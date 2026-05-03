import { Slot, usePathname, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

import { CustomerBottomNav } from "@/components/customer/navigation/CustomerBottomNav";
import { CustomerHeader } from "@/components/customer/navigation/CustomerHeader";
import { getCurrentProfile } from "@/lib/get-current-profile";

const hideCustomerChromeRoutes = ["/customer/start"];

export default function CustomerLayout() {
  const pathname = usePathname();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  const hideChrome = hideCustomerChromeRoutes.includes(pathname);

  useEffect(() => {
    async function checkAccess() {
      if (hideChrome) {
        setIsChecking(false);
        return;
      }

      const profile = await getCurrentProfile();

      if (!profile) {
        router.replace("/auth/sign-in");
        return;
      }

      if (profile.role !== "customer" && profile.role !== "admin") {
        router.replace("/");
        return;
      }

      setIsChecking(false);
    }

    checkAccess();
  }, [hideChrome, router]);

  if (isChecking) {
    return (
      <View className="flex-1 items-center justify-center bg-slate-50">
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-slate-50">
      {!hideChrome ? <CustomerHeader /> : null}

      <View className="flex-1">
        <Slot />
      </View>

      {!hideChrome ? <CustomerBottomNav /> : null}
    </View>
  );
}