import { Text, View } from "react-native";

type BadgeTone = "neutral" | "info" | "success" | "warning" | "danger";

type BadgeProps = {
  label: string;
  tone?: BadgeTone;
  className?: string;
};

const badgeClasses: Record<BadgeTone, string> = {
  neutral: "bg-[#F3F4F6]",
  info: "bg-[#EEF2FF]",
  success: "bg-[#ECFDF5]",
  warning: "bg-[#FEF3C7]",
  danger: "bg-[#FEE2E2]",
};

const textClasses: Record<BadgeTone, string> = {
  neutral: "text-[#4B5563]",
  info: "text-[#3730A3]",
  success: "text-[#15803D]",
  warning: "text-[#92400E]",
  danger: "text-[#B91C1C]",
};

export function Badge({ label, tone = "neutral", className = "" }: BadgeProps) {
  return (
    <View className={`self-start rounded-full px-2.5 py-1 ${badgeClasses[tone]} ${className}`}>
      <Text className={`text-xs font-medium ${textClasses[tone]}`}>
        {label}
      </Text>
    </View>
  );
}