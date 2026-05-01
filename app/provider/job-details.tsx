import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View } from "react-native";

import { ScrollScreen } from "@/components/common/ScrollScreen";
import { Button } from "@/components/ui/Button";

const jobs = {
  faucet: {
    title: "Fix leaking faucet",
    category: "Plumbing",
    location: "Dasmariñas, Cavite",
    budget: "₱500 - ₱1,000",
    schedule: "Tomorrow afternoon",
    description:
      "Kitchen faucet is leaking even when closed. Customer needs someone to check and fix it.",
  },
  cleaning: {
    title: "House cleaning",
    category: "Cleaning",
    location: "Imus, Cavite",
    budget: "₱800 - ₱1,500",
    schedule: "This weekend",
    description:
      "General house cleaning for a small home. Customer prefers weekend schedule.",
  },
  documents: {
    title: "Document pickup assistance",
    category: "Documents",
    location: "Trece Martires, Cavite",
    budget: "₱300 - ₱600",
    schedule: "Friday morning",
    description:
      "Customer needs help picking up documents. No fixer service or illegal processing allowed.",
  },
} as const;

type JobId = keyof typeof jobs;

export default function ProviderJobDetailsScreen() {
  const router = useRouter();
  const { jobId } = useLocalSearchParams<{ jobId?: string }>();

  const selectedJobId = jobId as JobId;
  const job = jobs[selectedJobId] ?? jobs.faucet;

  return (
    <ScrollScreen>
      <Text className="text-sm font-semibold text-slate-500">
        Job details
      </Text>

      <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
        {job.title}
      </Text>

      <Text className="mt-3 text-base leading-6 text-slate-600">
        Review the customer’s request before sending an offer.
      </Text>

      <View className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
        <Text className="text-base font-semibold text-slate-950">
          Request details
        </Text>

        <View className="mt-4 gap-3">
          <Text className="text-sm leading-5 text-slate-600">
            Category: {job.category}
          </Text>

          <Text className="text-sm leading-5 text-slate-600">
            Location: {job.location}
          </Text>

          <Text className="text-sm leading-5 text-slate-600">
            Budget: {job.budget}
          </Text>

          <Text className="text-sm leading-5 text-slate-600">
            Schedule: {job.schedule}
          </Text>
        </View>
      </View>

      <View className="mt-4 rounded-2xl border border-slate-200 bg-white p-5">
        <Text className="text-base font-semibold text-slate-950">
          Description
        </Text>

        <Text className="mt-3 text-sm leading-6 text-slate-600">
          {job.description}
        </Text>
      </View>

      <View className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4">
        <Text className="text-sm font-semibold text-amber-900">
          Reminder
        </Text>

        <Text className="mt-2 text-sm leading-5 text-amber-900">
          Only send an offer if the request is legal, safe, and within your service.
        </Text>
      </View>

      <View className="mt-8 gap-3 pb-2">
        <Button title="Send offer" onPress={() => {}} />

        <Button
          title="Back"
          variant="secondary"
          onPress={() => router.back()}
        />
      </View>
    </ScrollScreen>
  );
}