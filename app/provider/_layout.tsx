import { Stack, usePathname } from "expo-router";
import { View } from "react-native";

import { ProviderBottomNav } from "@/components/provider/navigation/ProviderBottomNav";
import { ProviderHeader } from "@/components/provider/navigation/ProviderHeader";

export default function ProviderLayout() {
  const pathname = usePathname();

  const isProviderRoute = pathname.startsWith("/provider");
  const isProviderStart = pathname === "/provider/start";

  return (
    <View className="flex-1 bg-slate-50">
      {isProviderRoute && !isProviderStart ? <ProviderHeader /> : null}

      <View className="flex-1">
        <Stack screenOptions={{ headerShown: false }} />
      </View>

      {isProviderRoute && !isProviderStart ? <ProviderBottomNav /> : null}
    </View>
  );
}