import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { Screen } from "@/components/common/Screen";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function Index() {
  const router = useRouter();

  return (
    <Screen contentClassName="justify-center">
      <View className="rounded-[32px] bg-white p-6 shadow-sm">
        <Badge label="Service marketplace" tone="info" />

        <View className="mt-6 h-20 w-20 items-center justify-center rounded-3xl bg-blue-600">
          <Text className="text-3xl font-extrabold text-white">EF</Text>
        </View>

        <Text className="mt-6 text-4xl font-extrabold text-slate-950">
          E-Fix
        </Text>

        <Text className="mt-3 text-base leading-6 text-slate-500">
          Find someone nearby for repairs, cleaning, errands, and document
          assistance.
        </Text>

        <View className="mt-8 gap-3">
          <Button
            title="Get started"
            onPress={() => router.push("/role-selection")}
          />

          <Button
            title="I already have an account"
            variant="secondary"
            onPress={() => {}}
          />
        </View>
      </View>
    </Screen>
  );
}