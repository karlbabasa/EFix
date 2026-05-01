import { Text, View } from "react-native";

import { Button } from "@/components/ui/Button";

type ProviderJobCardProps = {
  title: string;
  category: string;
  location: string;
  budget: string;
  schedule: string;
  onViewDetails: () => void;
};

export function ProviderJobCard({
  title,
  category,
  location,
  budget,
  schedule,
  onViewDetails,
}: ProviderJobCardProps) {
  return (
    <View className="rounded-2xl border border-slate-200 bg-white p-5">
      <View className="flex-row items-start justify-between gap-4">
        <View className="flex-1">
          <Text className="text-base font-bold text-slate-950">
            {title}
          </Text>

          <Text className="mt-1 text-sm text-slate-500">
            {category} • {location}
          </Text>
        </View>

        <View className="rounded-full bg-emerald-50 px-3 py-1">
          <Text className="text-xs font-semibold text-emerald-700">
            {budget}
          </Text>
        </View>
      </View>

      <View className="mt-4 rounded-xl bg-slate-50 p-3">
        <Text className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Preferred schedule
        </Text>

        <Text className="mt-1 text-sm font-semibold text-slate-700">
          {schedule}
        </Text>
      </View>

      <View className="mt-4">
        <Button
          title="View details"
          variant="secondary"
          onPress={onViewDetails}
        />
      </View>
    </View>
  );
}