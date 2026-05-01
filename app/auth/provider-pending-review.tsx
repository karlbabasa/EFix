import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { Screen } from "@/components/common/Screen";
import { Button } from "@/components/ui/Button";

const nextSteps = [
  "Admin checks your profile details.",
  "Admin reviews your submitted documents.",
  "You’ll be approved, rejected, or asked to resubmit.",
];

export default function ProviderPendingReviewScreen() {
  const router = useRouter();

  return (
    <Screen className="bg-slate-50">
      <View className="flex-1 justify-between">
        <View>
          <View className="h-14 w-14 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50">
            <Text className="text-2xl font-bold text-emerald-700">✓</Text>
          </View>

          <Text className="mt-8 text-sm font-semibold text-slate-500">
            Pending review
          </Text>

          <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
            Application submitted.
          </Text>

          <Text className="mt-3 text-base leading-6 text-slate-600">
            E-Fix will review your profile and documents. You can only accept jobs after approval.
          </Text>

          <View className="mt-8 rounded-3xl border border-slate-200 bg-white p-5">
            <Text className="text-base font-bold text-slate-950">
              What happens next
            </Text>

            <View className="mt-5 gap-4">
              {nextSteps.map((step, index) => (
                <View key={step} className="flex-row gap-3">
                  <View className="h-6 w-6 items-center justify-center rounded-full bg-slate-100">
                    <Text className="text-xs font-bold text-slate-600">
                      {index + 1}
                    </Text>
                  </View>

                  <Text className="flex-1 text-sm leading-5 text-slate-600">
                    {step}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View className="gap-3 pb-2">
          <Button
            title="Back to home"
            onPress={() => router.replace("/")}
          />

          <Button
            title="View provider home preview"
            variant="secondary"
            onPress={() => router.replace("/provider/home")}
          />
        </View>
      </View>
    </Screen>
  );
}