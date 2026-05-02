import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, Text, View } from "react-native";

type DashboardActionTileProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
  onPress?: () => void;
};

export function DashboardActionTile({
  icon,
  title,
  description,
  onPress,
}: DashboardActionTileProps) {
  return (
    <Pressable
      onPress={onPress}
      className="w-[48%] rounded-2xl border border-slate-200 bg-white p-4 active:opacity-80"
    >
      <View className="h-10 w-10 items-center justify-center rounded-full bg-slate-100">
        <Ionicons name={icon} size={20} color="#334155" />
      </View>

      <Text className="mt-4 text-sm font-bold text-slate-950">
        {title}
      </Text>

      <Text className="mt-1 text-xs text-slate-500">
        {description}
      </Text>
    </Pressable>
  );
}