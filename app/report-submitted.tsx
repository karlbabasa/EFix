import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { Screen } from "@/components/common/Screen";
import { Button } from "@/components/ui/Button";

export default function ReportSubmittedScreen() {
  const router = useRouter();

  return (
    <Screen>
      <View className="flex-1 justify-between">
        <View>
          <View className="h-14 w-14 items-center justify-center rounded-2xl bg-amber-100">
            <Text className="text-2xl">!</Text>
          </View>

          <Text className="mt-8 text-sm font-semibold text-slate-500">
            Report submitted
          </Text>

          <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
            We received your report.
          </Text>

          <Text className="mt-3 text-base leading-6 text-slate-600">
            This is only a placeholder for now. Later, admin will review reports
            and update the case status.
          </Text>

          <View className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
            <Text className="text-base font-semibold text-slate-950">
              Future admin actions
            </Text>

            <View className="mt-4 gap-3">
              <Text className="text-sm leading-5 text-slate-600">
                1. Review job and user details.
              </Text>

              <Text className="text-sm leading-5 text-slate-600">
                2. Contact customer or provider if needed.
              </Text>

              <Text className="text-sm leading-5 text-slate-600">
                3. Resolve, dismiss, warn, suspend, or ban.
              </Text>
            </View>
          </View>
        </View>

        <View className="gap-3 pb-2">
          <Button
            title="Back to customer home"
            onPress={() => router.replace("/customer/home")}
          />

          <Button
            title="Back to provider home"
            variant="secondary"
            onPress={() => router.replace("/provider/home")}
          />
        </View>
      </View>
    </Screen>
  );
}