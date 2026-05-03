import { Slot, usePathname, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

import { CustomerBottomNav } from "@/components/customer/navigation/CustomerBottomNav";
import { CustomerHeader } from "@/components/customer/navigation/CustomerHeader";
import { getCurrentProfile } from "@/lib/get-current-profile";

export default function CustomerLayout() {
  const pathname = usePathname();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  const isCustomerRoute = pathname.startsWith("/customer");
  const isCustomerStart = pathname === "/customer/start";

  useEffect(() => {
    let isMounted = true;

    async function checkAccess() {
      setIsChecking(true);

      if (!isCustomerRoute || isCustomerStart) {
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

      if (profile.role !== "customer" && profile.role !== "admin") {
        router.replace("/");
        return;
      }

      setIsChecking(false);
    }

    checkAccess();

    return () => {
      isMounted = false;
    };
  }, [pathname, isCustomerRoute, isCustomerStart, router]);

  if (isChecking) {
    return (
      <View className="flex-1 items-center justify-center bg-slate-50">
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-slate-50">
      {isCustomerRoute && !isCustomerStart ? <CustomerHeader /> : null}

      <View className="flex-1">
        <Slot />
      </View>

      {isCustomerRoute && !isCustomerStart ? <CustomerBottomNav /> : null}
    </View>
  );
}