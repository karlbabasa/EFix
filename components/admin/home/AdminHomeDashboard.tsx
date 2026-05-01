import { Text, View } from "react-native";

import { AdminMetricCard } from "@/components/admin/home/AdminMetricCard";
import { AdminQueueCard } from "@/components/admin/home/AdminQueueCard";

type AdminHomeDashboardProps = {
  onReviewProvider: () => void;
  onReviewReport: () => void;
};

export function AdminHomeDashboard({
  onReviewProvider,
  onReviewReport,
}: AdminHomeDashboardProps) {
  return (
    <View className="flex-1">
      <View>
        <Text className="text-sm font-semibold text-slate-500">
          Admin
        </Text>

        <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
          Review dashboard
        </Text>

        <Text className="mt-3 text-base leading-6 text-slate-600">
          Placeholder dashboard for reviewing provider applications, reports,
          and safety issues.
        </Text>
      </View>

      <View className="mt-8 flex-row flex-wrap gap-3">
        <AdminMetricCard
          label="Providers"
          value="3"
          description="Pending applications"
          tone="warning"
        />

        <AdminMetricCard
          label="Reports"
          value="2"
          description="Open safety cases"
          tone="danger"
        />

        <AdminMetricCard
          label="Approved"
          value="12"
          description="Verified providers"
          tone="success"
        />

        <AdminMetricCard
          label="Jobs"
          value="8"
          description="Active requests"
        />
      </View>

      <View className="mt-8">
        <Text className="text-base font-extrabold text-slate-950">
          Review queues
        </Text>

        <View className="mt-4 gap-3">
          <AdminQueueCard
            title="Provider applications"
            subtitle="Review submitted profiles, IDs, clearances, and proof of address."
            badge="3 pending"
            badgeTone="warning"
            primaryActionTitle="Review applications"
            onPrimaryAction={onReviewProvider}
          />

          <AdminQueueCard
            title="Reports and disputes"
            subtitle="Review unsafe behavior, scams, no-show cases, and illegal requests."
            badge="2 open"
            badgeTone="danger"
            primaryActionTitle="Review reports"
            onPrimaryAction={onReviewReport}
          />
        </View>
      </View>
    </View>
  );
}