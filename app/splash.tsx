import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";

import { redirectUserByRole } from "@/lib/redirect-user";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    redirectUserByRole(router);
  }, [router]);

  return (
    <View className="flex-1 items-center justify-center bg-slate-50 px-5">
      <View className="h-14 w-14 items-center justify-center rounded-2xl bg-slate-950">
        <Text className="text-base font-extrabold text-white">EF</Text>
      </View>

      <Text className="mt-5 text-xl font-extrabold text-slate-950">
        E-Fix
      </Text>

      <Text className="mt-2 text-center text-sm leading-5 text-slate-500">
        Checking your session...
      </Text>

      <ActivityIndicator className="mt-5" />
    </View>
  );
}