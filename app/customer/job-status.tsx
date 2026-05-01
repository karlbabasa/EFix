import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { Screen } from "@/components/common/Screen";
import { Button } from "@/components/ui/Button";

const statusSteps = [
  {
    title: "Job posted",
    description: "Your job request was opened for provider offers.",
    done: true,
  },
  {
    title: "Offer accepted",
    description: "You selected a provider for this job.",
    done: true,
  },
  {
    title: "In progress",
    description: "The provider has not started the job yet.",
    done: false,
  },
  {
    title: "Completed",
    description: "You can mark the job complete after the work is done.",
    done: false,
  },
];

export default function CustomerJobStatusScreen() {
  const router = useRouter();

  return (
    <Screen>
      <View className="flex-1 justify-between">
        <View>
          <Text className="text-sm font-semibold text-slate-500">
            Job tracking
          </Text>

          <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
            Fix leaking faucet
          </Text>

          <Text className="mt-3 text-base leading-6 text-slate-600">
            Track the job status from accepted offer to completion.
          </Text>

          <View className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
            <Text className="text-base font-semibold text-slate-950">
              Current status
            </Text>

            <Text className="mt-2 text-sm leading-5 text-slate-600">
              Accepted — waiting for provider to start.
            </Text>
          </View>

          <View className="mt-5 gap-3">
            {statusSteps.map((step) => (
              <View
                key={step.title}
                className="flex-row gap-3 rounded-2xl border border-slate-200 bg-white p-4"
              >
                <View
                  className={`mt-0.5 h-6 w-6 items-center justify-center rounded-full ${
                    step.done ? "bg-slate-950" : "bg-slate-200"
                  }`}
                >
                  <Text
                    className={`text-xs font-bold ${
                      step.done ? "text-white" : "text-slate-500"
                    }`}
                  >
                    {step.done ? "✓" : ""}
                  </Text>
                </View>

                <View className="flex-1">
                  <Text className="text-sm font-semibold text-slate-950">
                    {step.title}
                  </Text>

                  <Text className="mt-1 text-sm leading-5 text-slate-500">
                    {step.description}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View className="gap-3 pb-2">
          <Button title="Mark as completed" onPress={() => {}} />

          <Button
            title="Back to customer home"
            variant="secondary"
            onPress={() => router.replace("/customer/home")}
          />
        </View>
      </View>
    </Screen>
  );
}