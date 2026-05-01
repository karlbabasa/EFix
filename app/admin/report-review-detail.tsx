import { useLocalSearchParams, useRouter } from "expo-router";
import { Alert, Pressable, Text, View } from "react-native";

import { DetailRow } from "@/components/common/DetailRow";
import { demoReports } from "@/data";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { AuthNotice } from "@/components/auth/AuthNotice";
import { FormCard } from "@/components/auth/FormCard";
import { ScrollScreen } from "@/components/common/ScrollScreen";
import { Button } from "@/components/ui/Button";

function formatStatus(status: string) {
  return status.replace("_", " ");
}

export default function AdminReportReviewDetailScreen() {
  const router = useRouter();
  const { reportId } = useLocalSearchParams<{ reportId?: string }>();

  const report =
    demoReports.find((item) => item.id === reportId) ?? demoReports[0];

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
          <DetailRow label="Status" value={formatStatus(report.status)} />
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