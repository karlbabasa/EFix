import { Slot, usePathname } from "expo-router";
import { View } from "react-native";

import { CustomerBottomNav } from "@/components/customer/navigation/CustomerBottomNav";
import { CustomerHeader } from "@/components/customer/navigation/CustomerHeader";

const hideCustomerChromeRoutes = ["/customer/start"];

export default function CustomerLayout() {
  const pathname = usePathname();
  const hideChrome = hideCustomerChromeRoutes.includes(pathname);

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