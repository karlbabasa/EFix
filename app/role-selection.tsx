import { Pressable, Text, View } from "react-native";

import { Screen } from "@/components/common/Screen";
import { Badge } from "@/components/ui/Badge";

const roles = [
  {
    title: "I need help",
    description: "Book a service provider or post a job request.",
    badge: "Customer",
  },
  {
    title: "I offer services",
    description: "Register as a provider and submit your documents for review.",
    badge: "Provider",
  },
];

export default function RoleSelectionScreen() {
  return (
    <Screen>
      <View className="flex-1">
        <Badge label="Getting started" tone="info" />

        <Text className="mt-5 text-3xl font-extrabold text-slate-950">
          How will you use E-Fix?
        </Text>

        <Text className="mt-3 text-base leading-6 text-slate-500">
          Choose the option that fits you. You can always sign in later if you
          already have an account.
        </Text>

        <View className="mt-8 gap-4">
          {roles.map((role) => (
            <Pressable
              key={role.title}
              className="rounded-3xl border border-slate-200 bg-white p-5 active:opacity-80"
              onPress={() => {}}
            >
              <View className="flex-row items-start justify-between gap-4">
                <View className="flex-1">
                  <Text className="text-lg font-extrabold text-slate-950">
                    {role.title}
                  </Text>

                  <Text className="mt-2 text-sm leading-5 text-slate-500">
                    {role.description}
                  </Text>
                </View>

                <Badge label={role.badge} />
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </Screen>
  );
}