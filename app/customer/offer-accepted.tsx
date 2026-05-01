import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { Screen } from "@/components/common/Screen";
import { Button } from "@/components/ui/Button";

export default function OfferAcceptedScreen() {
  const router = useRouter();

  return (
    <Screen>
      <View className="flex-1 justify-between">
        <View>
          <View className="h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
            <Text className="text-2xl">✓</Text>
          </View>

          <Text className="mt-8 text-sm font-semibold text-slate-500">
            Offer accepted
          </Text>

          <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
            Provider selected.
          </Text>

          <Text className="mt-3 text-base leading-6 text-slate-600">
            The job is now accepted. Next, we’ll add job tracking and completion status.
          </Text>

          <View className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
            <Text className="text-base font-semibold text-slate-950">
              Job status
            </Text>

            <Text className="mt-3 text-sm leading-5 text-slate-600">
              Accepted — waiting for the provider to start the job.
            </Text>
          </View>
        </View>

        <View className="gap-3 pb-2">
          <Button
            title="Back to customer home"
            onPress={() => router.replace("/customer/home")}
          />

          <Button
            title="View offers again"
            variant="secondary"
            onPress={() => router.replace("/customer/offers")}
          />
        </View>
      </View>
    </Screen>
  );
}