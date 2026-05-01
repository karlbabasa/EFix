import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { Screen } from "@/components/common/Screen";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function ProviderPendingReviewScreen() {
  const router = useRouter();

  return (
    <Screen>
      <View className="flex-1 justify-center">
        <View className="h-20 w-20 items-center justify-center rounded-full bg-amber-100">
          <Text className="text-3xl">⏳</Text>
        </View>

        <Badge label="Pending review" tone="warning" className="mt-6" />

        <Text className="mt-5 text-3xl font-extrabold text-slate-950">
          Your application was submitted
        </Text>

        <Text className="mt-3 text-base leading-6 text-slate-500">
          E-Fix will review your profile and documents. You can only accept jobs
          after your provider account is approved.
        </Text>

        <View className="mt-8 rounded-3xl bg-white p-5">
          <Text className="text-base font-extrabold text-slate-950">
            What happens next?
          </Text>

          <View className="mt-4 gap-3">
            <Text className="text-sm leading-5 text-slate-600">
              1. Admin checks your profile details.
            </Text>

            <Text className="text-sm leading-5 text-slate-600">
              2. Admin reviews your uploaded documents.
            </Text>

            <Text className="text-sm leading-5 text-slate-600">
              3. You will be approved, rejected, or asked to resubmit.
            </Text>
          </View>
        </View>

        <View className="mt-8 gap-3">
          <Button
            title="Back to home"
            onPress={() => router.replace("/")}
          />

          <Button
            title="Sign in instead"
            variant="secondary"
            onPress={() => router.replace("/auth/sign-in")}
          />
        </View>
      </View>
    </Screen>
  );
}