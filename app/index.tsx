import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { Screen } from "@/components/common/Screen";
import { Button } from "@/components/ui/Button";

export default function Index() {
  const router = useRouter();

  return (
    <Screen>
      <View className="flex-1 justify-between">
        <View>
          <View className="h-14 w-14 items-center justify-center rounded-2xl bg-slate-950">
            <Text className="text-xl font-extrabold text-white">EF</Text>
          </View>

          <Text className="mt-8 text-4xl font-extrabold leading-tight text-slate-950">
            Get help from people nearby.
          </Text>

          <Text className="mt-4 text-base leading-6 text-slate-600">
            E-Fix connects customers with verified service providers for repairs,
            cleaning, errands, and document assistance.
          </Text>

          <View className="mt-8 rounded-2xl border border-slate-200 bg-white p-4">
            <Text className="text-sm font-semibold text-slate-950">
              For safety, providers are reviewed first.
            </Text>

            <Text className="mt-2 text-sm leading-5 text-slate-500">
              Providers must submit their profile and documents before they can
              accept jobs.
            </Text>
          </View>
        </View>

        <View className="gap-3 pb-2">
          <Button
            title="Get started"
            onPress={() => router.push("/role-selection")}
          />

          <Button
            title="I already have an account"
            variant="secondary"
            onPress={() => router.push("/auth/sign-in")}
          />
        </View>
      </View>
    </Screen>
  );
}