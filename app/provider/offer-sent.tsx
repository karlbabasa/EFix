import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { Screen } from "@/components/common/Screen";
import { Button } from "@/components/ui/Button";

export default function ProviderOfferSentScreen() {
  const router = useRouter();

  return (
    <Screen>
      <View className="flex-1 justify-between">
        <View>
          <View className="h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
            <Text className="text-2xl">✓</Text>
          </View>

          <Text className="mt-8 text-sm font-semibold text-slate-500">
            Offer sent
          </Text>

          <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
            Your offer was sent.
          </Text>

          <Text className="mt-3 text-base leading-6 text-slate-600">
            The customer can now review your offer together with other provider offers.
          </Text>

          <View className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
            <Text className="text-base font-semibold text-slate-950">
              What happens next
            </Text>

            <View className="mt-4 gap-3">
              <Text className="text-sm leading-5 text-slate-600">
                1. Customer reviews your offer.
              </Text>

              <Text className="text-sm leading-5 text-slate-600">
                2. Customer may accept, reject, or wait for more offers.
              </Text>

              <Text className="text-sm leading-5 text-slate-600">
                3. If accepted, the job moves to accepted status.
              </Text>
            </View>
          </View>
        </View>

        <View className="gap-3 pb-2">
          <Button
            title="Back to open jobs"
            onPress={() => router.replace("/provider/open-jobs")}
          />

          <Button
            title="Provider home"
            variant="secondary"
            onPress={() => router.replace("/provider/home")}
          />
        </View>
      </View>
    </Screen>
  );
}