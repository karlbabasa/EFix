import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { Screen } from "@/components/common/Screen";
import { RoleOptionCard } from "@/components/onboarding/RoleOptionCard";

export default function RoleSelectionScreen() {
  const router = useRouter();

  return (
    <Screen className="bg-slate-50">
      <View className="flex-1 justify-between">
        <View>
          <Text className="text-sm font-semibold text-slate-500">
            Choose account type
          </Text>

          <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
            How will you use E-Fix?
          </Text>

          <Text className="mt-3 text-base leading-6 text-slate-600">
            Choose the path that matches what you need today.
          </Text>

          <View className="mt-8 gap-3">
            <RoleOptionCard
              label="Customer account"
              title="I need a service"
              description="Post a job, compare offers, and hire a provider."
              onPress={() => router.push("/customer/start")}
            />

            <RoleOptionCard
              label="Provider application"
              title="I offer services"
              description="Apply as a provider and submit documents for review."
              onPress={() => router.push("/provider/start")}
            />
          </View>
        </View>

        <Pressable
          className="pb-2 active:opacity-70"
          onPress={() => router.push("/auth/sign-in")}
        >
          <Text className="text-center text-sm font-semibold text-slate-600">
            Already have an account? Sign in
          </Text>
        </Pressable>
      </View>
    </Screen>
  );
}