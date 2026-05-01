import { Text, View } from "react-native";

import { Screen } from "@/components/common/Screen";
import { Button } from "@/components/ui/Button";

const providerActions = [
  {
    title: "Browse open jobs",
    description: "See customer job posts that match your service area.",
  },
  {
    title: "Update availability",
    description: "Set when you are available to accept work.",
  },
  {
    title: "Check application status",
    description: "View if your provider account is approved or still pending.",
  },
];

export default function ProviderHomeScreen() {
  return (
    <Screen>
      <View className="flex-1">
        <Text className="text-sm font-semibold text-slate-500">
          Provider home
        </Text>

        <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
          Manage your provider account.
        </Text>

        <Text className="mt-3 text-base leading-6 text-slate-600">
          Once approved, you can browse jobs, send offers, and manage your service profile.
        </Text>

        <View className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <Text className="text-sm font-semibold text-amber-900">
            Approval required
          </Text>

          <Text className="mt-2 text-sm leading-5 text-amber-900">
            Providers should only access job features after admin approval. We will enforce this with auth and protected routes later.
          </Text>
        </View>

        <View className="mt-5 gap-3">
          {providerActions.map((action) => (
            <View
              key={action.title}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <Text className="text-base font-semibold text-slate-950">
                {action.title}
              </Text>

              <Text className="mt-2 text-sm leading-5 text-slate-500">
                {action.description}
              </Text>

              <View className="mt-4">
                <Button title={action.title} variant="secondary" onPress={() => {}} />
              </View>
            </View>
          ))}
        </View>
      </View>
    </Screen>
  );
}