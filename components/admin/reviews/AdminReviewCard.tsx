import { Text, View } from "react-native";

import { Button } from "@/components/ui/Button";

type AdminReviewCardProps = {
  name: string;
  service: string;
  location: string;
  submittedAt: string;
  status: string;
  onReview: () => void;
};

export function AdminReviewCard({
  name,
  service,
  location,
  submittedAt,
  status,
  onReview,
}: AdminReviewCardProps) {
  return (
    <View className="rounded-2xl border border-slate-200 bg-white p-5">
      <View className="flex-row items-start justify-between gap-4">
        <View className="flex-1">
          <Text className="text-base font-bold text-slate-950">
            {name}
          </Text>

          <Text className="mt-1 text-sm text-slate-500">
            {service} • {location}
          </Text>
        </View>

        <View className="rounded-full bg-amber-50 px-3 py-1">
          <Text className="text-xs font-semibold text-amber-700">
            {status}
          </Text>
        </View>
      </View>

      <View className="mt-4 rounded-xl bg-slate-50 p-3">
        <Text className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Submitted
        </Text>

        <Text className="mt-1 text-sm font-semibold text-slate-700">
          {submittedAt}
        </Text>
      </View>

      <View className="mt-4">
        <Button
          title="Review application"
          variant="secondary"
          onPress={onReview}
        />
      </View>
    </View>
  );
}