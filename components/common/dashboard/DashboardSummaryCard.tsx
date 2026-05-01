import { Text, View } from "react-native";

import { Button } from "@/components/ui/Button";

type DashboardSummaryCardProps = {
  label: string;
  title: string;
  description: string;
  buttonTitle: string;
  onPress: () => void;
  tone?: "default" | "warning";
};

export function DashboardSummaryCard({
  label,
  title,
  description,
  buttonTitle,
  onPress,
  tone = "default",
}: DashboardSummaryCardProps) {
  const isWarning = tone === "warning";

  return (
    <View
      className={`mt-6 rounded-3xl border p-5 ${
        isWarning
          ? "border-amber-200 bg-amber-50"
          : "border-slate-200 bg-white"
      }`}
    >
      <Text
        className={`text-sm font-semibold ${
          isWarning ? "text-amber-800" : "text-slate-500"
        }`}
      >
        {label}
      </Text>

      <Text className="mt-3 text-2xl font-extrabold leading-tight text-slate-950">
        {title}
      </Text>

      <Text
        className={`mt-2 text-sm leading-5 ${
          isWarning ? "text-amber-900" : "text-slate-500"
        }`}
      >
        {description}
      </Text>

      <View className="mt-5">
        <Button title={buttonTitle} onPress={onPress} />
      </View>
    </View>
  );
}