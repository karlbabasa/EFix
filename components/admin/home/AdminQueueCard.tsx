import { Text, View } from "react-native";

import { Button } from "@/components/ui/Button";

type AdminQueueCardProps = {
  title: string;
  subtitle: string;
  badge: string;
  badgeTone?: "warning" | "danger" | "success" | "default";
  primaryActionTitle: string;
  secondaryActionTitle?: string;
  onPrimaryAction: () => void;
  onSecondaryAction?: () => void;
};

export function AdminQueueCard({
  title,
  subtitle,
  badge,
  badgeTone = "default",
  primaryActionTitle,
  secondaryActionTitle,
  onPrimaryAction,
  onSecondaryAction,
}: AdminQueueCardProps) {
  const badgeClasses = {
    default: "bg-slate-100 text-slate-600",
    warning: "bg-amber-50 text-amber-700",
    danger: "bg-red-50 text-red-700",
    success: "bg-emerald-50 text-emerald-700",
  };

  return (
    <View className="rounded-2xl border border-slate-200 bg-white p-5">
      <View className="flex-row items-start justify-between gap-4">
        <View className="flex-1">
          <Text className="text-base font-bold text-slate-950">
            {title}
          </Text>

          <Text className="mt-1 text-sm leading-5 text-slate-500">
            {subtitle}
          </Text>
        </View>

        <View className={`rounded-full px-3 py-1 ${badgeClasses[badgeTone].split(" ")[0]}`}>
          <Text className={`text-xs font-semibold ${badgeClasses[badgeTone].split(" ")[1]}`}>
            {badge}
          </Text>
        </View>
      </View>

      <View className="mt-4 gap-3">
        <Button
          title={primaryActionTitle}
          variant="secondary"
          onPress={onPrimaryAction}
        />

        {secondaryActionTitle && onSecondaryAction ? (
          <Button
            title={secondaryActionTitle}
            variant="ghost"
            onPress={onSecondaryAction}
          />
        ) : null}
      </View>
    </View>
  );
}