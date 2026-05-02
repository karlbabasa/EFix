import { Slot, usePathname } from "expo-router";
import { View } from "react-native";

import { ProviderBottomNav } from "@/components/provider/navigation/ProviderBottomNav";
import { ProviderHeader } from "@/components/provider/navigation/ProviderHeader";

const hideProviderChromeRoutes = ["/provider/start"];

export default function ProviderLayout() {
  const pathname = usePathname();
  const hideChrome = hideProviderChromeRoutes.includes(pathname);

  return (
    <View className="flex-1 bg-slate-50">
      {!hideChrome ? <ProviderHeader /> : null}

      <View className="flex-1">
        <Slot />
      </View>

      {!hideChrome ? <ProviderBottomNav /> : null}
    </View>
  );
}