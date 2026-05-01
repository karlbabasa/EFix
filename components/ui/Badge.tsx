import { Text, View } from "react-native";

type BadgeTone = "neutral" | "info" | "success" | "warning" | "danger";

type BadgeProps = {
  label: string;
  tone?: BadgeTone;
  className?: string;
};

const badgeClasses: Record<BadgeTone, string> = {
  neutral: "bg-slate-100",
  info: "bg-blue-50",
  success: "bg-emerald-50",
  warning: "bg-amber-50",
  danger: "bg-red-50",
};

const textClasses: Record<BadgeTone, string> = {
  neutral: "text-slate-600",
  info: "text-blue-700",
  success: "text-emerald-700",
  warning: "text-amber-700",
  danger: "text-red-700",
};

export function Badge({ label, tone = "neutral", className = "" }: BadgeProps) {
  return (
    <View className={`self-start rounded-full px-3 py-1 ${badgeClasses[tone]} ${className}`}>
      <Text className={`text-xs font-semibold ${textClasses[tone]}`}>
        {label}
      </Text>
    </View>
  );
}