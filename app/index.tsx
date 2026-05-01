import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { Screen } from "@/components/common/Screen";
import { Button } from "@/components/ui/Button";

export default function Index() {
  const router = useRouter();

  return (
    <Screen className="bg-slate-50">
      <View className="flex-1 justify-between">
        <View>
          <View className="flex-row items-center justify-between">
            <View className="h-12 w-12 items-center justify-center rounded-2xl bg-slate-950">
              <Text className="text-base font-extrabold text-white">EF</Text>
            </View>

            <Text className="text-sm font-semibold text-slate-500">
              Service marketplace
            </Text>
          </View>

          <View className="mt-12">
            <Text className="text-4xl font-extrabold leading-tight text-slate-950">
              Book trusted help for local services.
            </Text>

            <Text className="mt-4 text-base leading-6 text-slate-600">
              Post jobs, compare offers, and work with reviewed providers for
              repairs, cleaning, errands, and document assistance.
            </Text>
          </View>

          <View className="mt-8 rounded-3xl border border-slate-200 bg-white p-5">
            <Text className="text-base font-bold text-slate-950">
              Providers are reviewed first.
            </Text>

            <Text className="mt-2 text-sm leading-5 text-slate-500">
              Provider accounts must submit profile details and documents before
              accepting jobs.
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