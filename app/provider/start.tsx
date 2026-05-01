import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { Screen } from "@/components/common/Screen";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export default function ProviderStartScreen() {
  const router = useRouter();

  return (
    <Screen>
      <View className="flex-1 justify-center">
        <Badge label="Provider" tone="warning" />

        <Text className="mt-5 text-3xl font-extrabold text-slate-950">
          Apply as a provider
        </Text>

        <Text className="mt-3 text-base leading-6 text-slate-500">
          Submit your profile and legal documents. You can accept jobs only after admin approval.
        </Text>

        <View className="mt-8 gap-3">
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