import { useLocalSearchParams, useRouter } from "expo-router";
import { Alert, Pressable, Text, View } from "react-native";

import { AuthHeader } from "@/components/auth/AuthHeader";
import { AuthNotice } from "@/components/auth/AuthNotice";
import { FormCard } from "@/components/auth/FormCard";
import { ScrollScreen } from "@/components/common/ScrollScreen";
import { Button } from "@/components/ui/Button";

const reports = {
  "no-show": {
    reason: "No show",
    jobTitle: "Fix leaking faucet",
    reporter: "Customer Karl B.",
    reportedUser: "Provider Mark D.",
    submittedAt: "Today, 10:15 AM",
    status: "Open",
    details:
      "Customer reported that the provider accepted the job but did not arrive at the agreed time and stopped responding.",
    evidence: ["Job details", "Offer record", "Message history placeholder"],
  },
  "illegal-request": {
    reason: "Illegal request",
    jobTitle: "Document pickup assistance",
    reporter: "Provider Jun R.",
    reportedUser: "Customer Ana S.",
    submittedAt: "Yesterday, 6:40 PM",
    status: "Open",
    details:
      "Provider reported that the customer requested assistance that may bypass a legal process.",
    evidence: ["Job details", "Report notes", "Message history placeholder"],
  },
} as const;

type ReportId = keyof typeof reports;

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <View className="flex-row justify-between gap-4 border-b border-slate-100 py-3 last:border-b-0">
      <Text className="text-sm font-semibold text-slate-500">
        {label}
      </Text>

      <Text className="flex-1 text-right text-sm font-semibold text-slate-800">
        {value}
      </Text>
    </View>
  );
}

export default function AdminReportReviewDetailScreen() {
  const router = useRouter();
  const { reportId } = useLocalSearchParams<{ reportId?: string }>();

  const selectedReportId =
    typeof reportId === "string" && reportId in reports
      ? (reportId as ReportId)
      : "no-show";

  const report = reports[selectedReportId];

  return (
    <ScrollScreen className="bg-slate-50">
      <Pressable
        className="mb-6 self-start active:opacity-70"
        onPress={() => router.back()}
      >
        <Text className="text-sm font-semibold text-slate-600">
          ← Back
        </Text>
      </Pressable>

      <AuthHeader
        eyebrow="Report review"
        title={report.reason}
        description="Review the report details, related job, and involved users before taking action."
      />

      <View className="mt-8">
        <FormCard title="Report details">
          <DetailRow label="Job" value={report.jobTitle} />
          <DetailRow label="Reporter" value={report.reporter} />
          <DetailRow label="Reported user" value={report.reportedUser} />
          <DetailRow label="Submitted" value={report.submittedAt} />
          <DetailRow label="Status" value={report.status} />
        </FormCard>
      </View>

      <View className="mt-5">
        <FormCard title="Report statement">
          <Text className="text-sm leading-6 text-slate-600">
            {report.details}
          </Text>
        </FormCard>
      </View>

      <View className="mt-5">
        <FormCard title="Review materials">
          <View className="gap-3">
            {report.evidence.map((item) => (
              <View
                key={item}
                className="flex-row items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
              >
                <Text className="text-sm font-semibold text-slate-700">
                  {item}
                </Text>

                <Text className="text-xs font-semibold text-slate-500">
                  Placeholder
                </Text>
              </View>
            ))}
          </View>
        </FormCard>
      </View>

      <View className="mt-5">
        <AuthNotice
          tone="warning"
          title="Admin decision should be recorded."
          description="Later, require admin notes before resolving, dismissing, warning, suspending, or banning a user."
        />
      </View>

      <View className="mt-8 gap-3 pb-2">
        <Button
          title="Resolve report"
          onPress={() => Alert.alert("Resolved placeholder")}
        />

        <Button
          title="Dismiss report"
          variant="secondary"
          onPress={() => Alert.alert("Dismissed placeholder")}
        />

        <Button
          title="Warn user"
          variant="secondary"
          onPress={() => Alert.alert("Warning placeholder")}
        />

        <Button
          title="Suspend user"
          variant="danger"
          onPress={() => Alert.alert("Suspension placeholder")}
        />
      </View>
    </ScrollScreen>
  );
}