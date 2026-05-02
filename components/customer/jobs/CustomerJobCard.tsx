import { Text, View } from "react-native";

import { Button } from "@/components/ui/Button";

type CustomerJobCardProps = {
  title: string;
  category: string;
  location: string;
  schedule: string;
  budget: string;
  status: string;
  onViewStatus: () => void;
  onViewOffers: () => void;
};

export function CustomerJobCard({
  title,
  category,
  location,
  schedule,
  budget,
  status,
  onViewStatus,
  onViewOffers,
}: CustomerJobCardProps) {
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

        <View className="rounded-full bg-amber-50 px-3 py-1">
          <Text className="text-xs font-semibold text-amber-700">
            {status}
          </Text>
        </View>
      </View>

      <View className="mt-4 rounded-xl bg-slate-50 p-3">
        <Text className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Schedule
        </Text>

        <Text className="mt-1 text-sm font-semibold text-slate-700">
          {schedule}
        </Text>

        <Text className="mt-2 text-sm font-semibold text-slate-700">
          Budget: {budget}
        </Text>
      </View>

      <View className="mt-4 gap-3">
        <Button
          title="View status"
          variant="secondary"
          onPress={onViewStatus}
        />

        <Button
          title="View offers"
          variant="ghost"
          onPress={onViewOffers}
        />
      </View>
    </View>
  );
}