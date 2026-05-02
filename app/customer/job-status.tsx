import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { AppScrollView } from "@/components/common/AppScrollView";
import { StatusTimelineItem } from "@/components/customer/jobs/StatusTimelineItem";
import { CustomerBottomNav } from "@/components/customer/navigation/CustomerBottomNav";
import { Button } from "@/components/ui/Button";

const statusSteps = [
  {
    title: "Job posted",
    description: "Your request was opened for provider offers.",
    done: true,
  },
  {
    title: "Offer accepted",
    description: "You selected a provider for this job.",
    done: true,
  },
  {
    title: "In progress",
    description: "Waiting for the provider to start the work.",
    done: false,
  },
  {
    title: "Completed",
    description: "Mark complete after the work is finished.",
    done: false,
  },
];

export default function CustomerJobStatusScreen() {
  const router = useRouter();

  return (
    <AppScrollView className="bg-slate-50" contentClassName="pb-28">
      <View className="flex-1 justify-between">
        <View>
          <Text className="text-sm font-semibold text-slate-500">
            Job tracking
          </Text>

          <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
            Fix leaking faucet
          </Text>

          <Text className="mt-3 text-base leading-6 text-slate-600">
            Track the job from accepted offer to completion.
          </Text>

          <View className="mt-8 rounded-3xl border border-slate-200 bg-white p-5">
            <View className="flex-row items-start justify-between gap-4">
              <View className="flex-1">
                <Text className="text-sm font-semibold text-slate-500">
                  Current status
                </Text>

                <Text className="mt-2 text-xl font-extrabold text-slate-950">
                  Accepted
                </Text>

                <Text className="mt-2 text-sm leading-5 text-slate-500">
                  Waiting for the provider to start the job.
                </Text>
              </View>

              <View className="rounded-full bg-amber-50 px-3 py-1">
                <Text className="text-xs font-semibold text-amber-700">
                  Pending
                </Text>
              </View>
            </View>
          </View>

          <View className="mt-5 gap-3">
            {statusSteps.map((step) => (
              <StatusTimelineItem
                key={step.title}
                title={step.title}
                description={step.description}
                done={step.done}
              />
            ))}
          </View>
        </View>

        <View className="gap-3 pb-2">
          <Button
            title="Mark as completed"
            onPress={() => router.replace("/customer/rate-provider")}
          />

          <Button
            title="Report an issue"
            variant="secondary"
            onPress={() => router.push("/report")}
          />
        </View>
      </View>
    </AppScrollView>
  );
}