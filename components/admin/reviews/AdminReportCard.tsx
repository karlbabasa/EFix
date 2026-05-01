import { Text, View } from "react-native";

import { Button } from "@/components/ui/Button";

type AdminReportCardProps = {
  reporter: string;
  reportedUser: string;
  reason: string;
  jobTitle: string;
  submittedAt: string;
  status: string;
  onReview: () => void;
};

export function AdminReportCard({
  reporter,
  reportedUser,
  reason,
  jobTitle,
  submittedAt,
  status,
  onReview,
}: AdminReportCardProps) {
  return (
    <View className="rounded-2xl border border-slate-200 bg-white p-5">
      <View className="flex-row items-start justify-between gap-4">
        <View className="flex-1">
          <Text className="text-base font-bold text-slate-950">
            {reason}
          </Text>

          <Text className="mt-1 text-sm leading-5 text-slate-500">
            {jobTitle}
          </Text>
        </View>

        <View className="rounded-full bg-red-50 px-3 py-1">
          <Text className="text-xs font-semibold text-red-700">
            {status}
          </Text>
        </View>
      </View>

      <View className="mt-4 rounded-xl bg-slate-50 p-3">
        <Text className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Parties
        </Text>

        <Text className="mt-1 text-sm font-semibold text-slate-700">
          {reporter} reported {reportedUser}
        </Text>
      </View>

      <Text className="mt-4 text-sm text-slate-500">
        Submitted: {submittedAt}
      </Text>

      <View className="mt-4">
        <Button
          title="Review report"
          variant="secondary"
          onPress={onReview}
        />
      </View>
    </View>
  );
}