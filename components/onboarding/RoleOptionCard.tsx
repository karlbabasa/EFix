import { Pressable, Text, View } from "react-native";

type RoleOptionCardProps = {
  label: string;
  title: string;
  description: string;
  onPress: () => void;
};

export function RoleOptionCard({
  label,
  title,
  description,
  onPress,
}: RoleOptionCardProps) {
  return (
    <Pressable
      onPress={onPress}
      className="rounded-2xl border border-slate-200 bg-white p-5 active:opacity-80"
    >
      <Text className="text-xs font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </Text>

      <Text className="mt-3 text-lg font-extrabold text-slate-950">
        {title}
      </Text>

      <Text className="mt-2 text-sm leading-5 text-slate-500">
        {description}
      </Text>
    </Pressable>
  );
}