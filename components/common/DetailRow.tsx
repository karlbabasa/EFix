import { Text, View } from "react-native";

type DetailRowProps = {
  label: string;
  value: string;
};

export function DetailRow({ label, value }: DetailRowProps) {
  return (
    <View className="flex-row justify-between gap-4 border-b border-slate-100 py-3 last:border-b-0">
      <Text className="text-sm font-semibold text-slate-500">
        {label}
      </Text>

      <Text className="flex-1 text-right text-sm font-semibold text-slate-800">
        {value}
      </Text>
    </View>
  );
}