import { Slot } from "expo-router";
import { View } from "react-native";

import { CustomerHeader } from "@/components/customer/navigation/CustomerHeader";
import { CustomerBottomNav } from "@/components/customer/navigation/CustomerBottomNav";

export default function CustomerLayout() {
  return (
    <View className="flex-1 bg-slate-50">
      <CustomerHeader />

      <View className="flex-1">
        <Slot />
      </View>

      <CustomerBottomNav />
    </View>
  );
}