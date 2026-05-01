import { Text, View } from "react-native";

import { Screen } from "@/components/common/Screen";
import { Button } from "@/components/ui/Button";

const quickActions = [
  {
    title: "Find a provider",
    description: "Search by service like plumbing, cleaning, or errands.",
  },
  {
    title: "Post a job",
    description: "Describe what you need and wait for provider offers.",
  },
];

export default function CustomerHomeScreen() {
  return (
    <Screen>
      <View className="flex-1">
        <Text className="text-sm font-semibold text-slate-500">
          Customer home
        </Text>

        <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
          What do you need help with today?
        </Text>

        <Text className="mt-3 text-base leading-6 text-slate-600">
          Start by searching for a provider or posting a job request.
        </Text>

        <View className="mt-8 gap-3">
          {quickActions.map((action) => (
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