import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";

type StatusTimelineItemProps = {
  title: string;
  description: string;
  done?: boolean;
};

export function StatusTimelineItem({
  title,
  description,
  done = false,
}: StatusTimelineItemProps) {
  return (
    <View className="flex-row gap-3 rounded-2xl border border-slate-200 bg-white p-4">
      <View
        className={`mt-0.5 h-7 w-7 items-center justify-center rounded-full ${
          done ? "bg-slate-950" : "bg-slate-100"
        }`}
      >
        {done ? (
          <Ionicons name="checkmark" size={15} color="#FFFFFF" />
        ) : (
          <Ionicons name="ellipse-outline" size={14} color="#94A3B8" />
        )}
      </View>

      <View className="flex-1">
        <Text className="text-sm font-bold text-slate-950">{title}</Text>

        <Text className="mt-1 text-sm leading-5 text-slate-500">
          {description}
        </Text>
      </View>
    </View>
  );
}