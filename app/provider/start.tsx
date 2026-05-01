import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { Screen } from "@/components/common/Screen";
import { Button } from "@/components/ui/Button";

export default function ProviderStartScreen() {
  const router = useRouter();

  return (
    <Screen>
      <View className="flex-1 justify-between">
        <View>
          <Text className="text-sm font-semibold text-slate-500">
            Provider
          </Text>

          <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
            Apply to offer services.
          </Text>

          <Text className="mt-3 text-base leading-6 text-slate-600">
            Providers go through a review first. This helps keep E-Fix safer for
            customers and other service providers.
          </Text>

          <View className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
            <Text className="text-base font-semibold text-slate-950">
              What you’ll prepare
            </Text>

            <View className="mt-4 gap-3">
              <Text className="text-sm leading-5 text-slate-600">
                • Basic profile and service details
              </Text>
              <Text className="text-sm leading-5 text-slate-600">
                • Valid ID and selfie verification
              </Text>
              <Text className="text-sm leading-5 text-slate-600">
                • Clearance or proof of address
              </Text>
            </View>
          </View>

          <View className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <Text className="text-sm font-semibold text-amber-900">
              You can accept jobs only after approval.
            </Text>
          </View>
        </View>

        <View className="gap-3 pb-2">
          <Button
            title="Start application"
            onPress={() => router.push("/auth/provider-register")}
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