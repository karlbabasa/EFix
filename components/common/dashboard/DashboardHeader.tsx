import { Text, View } from "react-native";

type DashboardHeaderProps = {
  label: string;
  title: string;
  avatarLabel: string;
};

export function DashboardHeader({
  label,
  title,
  avatarLabel,
}: DashboardHeaderProps) {
  return (
    <View className="flex-row items-center justify-between">
      <View>
        <Text className="text-sm font-semibold text-slate-500">
          {label}
        </Text>

        <Text className="mt-1 text-2xl font-extrabold text-slate-950">
          {title}
        </Text>
      </View>

      <View className="h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white">
        <Text className="text-sm font-bold text-slate-700">
          {avatarLabel}
        </Text>
      </View>
    </View>
  );
}