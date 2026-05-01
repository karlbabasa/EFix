import { Text, View } from "react-native";

import { Button } from "@/components/ui/Button";

type DashboardInfoCardProps = {
  title: string;
  subtitle: string;
  badgeLabel?: string;
  badgeTone?: "default" | "success" | "warning";
  description?: string;
  buttonTitle?: string;
  onPress?: () => void;
};

export function DashboardInfoCard({
  title,
  subtitle,
  badgeLabel,
  badgeTone = "default",
  description,
  buttonTitle,
  onPress,
}: DashboardInfoCardProps) {
  const badgeClasses = {
    default: "bg-slate-100 text-slate-600",
    success: "bg-emerald-50 text-emerald-700",
    warning: "bg-amber-50 text-amber-700",
  };

  return (
    <View className="mt-4 rounded-2xl border border-slate-200 bg-white p-5">
      <View className="flex-row items-start justify-between gap-4">
        <View className="flex-1">
          <Text className="text-base font-bold text-slate-950">
            {title}
          </Text>

          <Text className="mt-1 text-sm text-slate-500">
            {subtitle}
          </Text>
        </View>

        {badgeLabel ? (
          <View className="rounded-full px-3 py-1">
            <Text className={`text-xs font-semibold ${badgeClasses[badgeTone]}`}>
              {badgeLabel}
            </Text>
          </View>
        ) : null}
      </View>

      {description ? (
        <Text className="mt-4 text-sm leading-5 text-slate-500">
          {description}
        </Text>
      ) : null}

      {buttonTitle && onPress ? (
        <View className="mt-4">
          <Button title={buttonTitle} variant="secondary" onPress={onPress} />
        </View>
      ) : null}
    </View>
  );
}