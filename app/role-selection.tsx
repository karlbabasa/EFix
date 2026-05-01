import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { Screen } from "@/components/common/Screen";

const roles = [
  {
    title: "I need a service",
    description: "Find a provider or post a job request.",
    meta: "Customer account",
    href: "/customer/start",
  },
  {
    title: "I offer services",
    description: "Apply as a provider and submit your documents for review.",
    meta: "Provider application",
    href: "/provider/start",
  },
] as const;

export default function RoleSelectionScreen() {
  const router = useRouter();

  return (
    <Screen>
      <View className="flex-1 justify-between">
        <View>
          <Text className="text-sm font-semibold text-slate-500">
            Choose account type
          </Text>

          <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
            What brings you to E-Fix?
          </Text>

          <Text className="mt-3 text-base leading-6 text-slate-600">
            Pick the path that matches what you need today.
          </Text>

          <View className="mt-8 gap-3">
            {roles.map((role) => (
              <Pressable
                key={role.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 active:opacity-80"
                onPress={() => router.push(role.href)}
              >
                <Text className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {role.meta}
                </Text>

                <Text className="mt-3 text-lg font-extrabold text-slate-950">
                  {role.title}
                </Text>

                <Text className="mt-2 text-sm leading-5 text-slate-500">
                  {role.description}
                </Text>
              </Pressable>
            ))}
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