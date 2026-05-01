import { useLocalSearchParams, useRouter } from "expo-router";
import { View } from "react-native";

import { AuthHeader } from "@/components/auth/AuthHeader";
import { AuthNotice } from "@/components/auth/AuthNotice";
import { FormCard } from "@/components/auth/FormCard";
import { ScrollScreen } from "@/components/common/ScrollScreen";
import { JobDetailRow } from "@/components/provider/jobs/JobDetailRow";
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

  const selectedJobId =
    typeof jobId === "string" && jobId in jobs ? (jobId as JobId) : "faucet";

  const job = jobs[selectedJobId];

  return (
    <ScrollScreen className="bg-slate-50">
      <AuthHeader
        eyebrow="Job details"
        title={job.title}
        description="Review the customer request before sending an offer."
      />

      <View className="mt-8">
        <FormCard title="Request details">
          <JobDetailRow label="Category" value={job.category} />
          <JobDetailRow label="Location" value={job.location} />
          <JobDetailRow label="Budget" value={job.budget} />
          <JobDetailRow label="Schedule" value={job.schedule} />
        </FormCard>
      </View>

      <View className="mt-5">
        <FormCard title="Description">
          <View>
            <JobDetailRow label="Request" value={job.description} />
          </View>
        </FormCard>
      </View>

      <View className="mt-5">
        <AuthNotice
          tone="warning"
          title="Check before offering."
          description="Only send an offer if the request is legal, safe, and within your verified service."
        />
      </View>

      <View className="mt-8 gap-3 pb-2">
        <Button
          title="Send offer"
          onPress={() =>
            router.push({
              pathname: "/provider/send-offer",
              params: { jobId: selectedJobId },
            })
          }
        />

        <Button
          title="Report this job"
          variant="secondary"
          onPress={() => router.push("/report")}
        />

        <Button
          title="Back"
          variant="ghost"
          onPress={() => router.back()}
        />
      </View>
    </ScrollScreen>
  );
}