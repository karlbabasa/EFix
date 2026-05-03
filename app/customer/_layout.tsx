import { Stack, usePathname } from "expo-router";
import { View } from "react-native";

import { CustomerBottomNav } from "@/components/customer/navigation/CustomerBottomNav";
import { CustomerHeader } from "@/components/customer/navigation/CustomerHeader";

export default function CustomerLayout() {
  const pathname = usePathname();

  const isCustomerRoute = pathname.startsWith("/customer");
  const isCustomerStart = pathname === "/customer/start";

  return (
    <View className="flex-1 bg-slate-50">
      {isCustomerRoute && !isCustomerStart ? <CustomerHeader /> : null}

      <View className="flex-1">
        <Stack screenOptions={{ headerShown: false }} />
      </View>

      {isCustomerRoute && !isCustomerStart ? <CustomerBottomNav /> : null}
    </View>
  );
}