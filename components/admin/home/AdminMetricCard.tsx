import { Text, View } from "react-native";

type AdminMetricCardProps = {
  label: string;
  value: string;
  description: string;
  tone?: "default" | "warning" | "danger" | "success";
};

export function AdminMetricCard({
  label,
  value,
  description,
  tone = "default",
}: AdminMetricCardProps) {
  const toneClasses = {
    default: "bg-slate-100 text-slate-700",
    warning: "bg-amber-50 text-amber-700",
    danger: "bg-red-50 text-red-700",
    success: "bg-emerald-50 text-emerald-700",
  };

  return (
    <View className="w-[48%] rounded-2xl border border-slate-200 bg-white p-4">
      <View className={`self-start rounded-full px-3 py-1 ${toneClasses[tone].split(" ")[0]}`}>
        <Text className={`text-xs font-semibold ${toneClasses[tone].split(" ")[1]}`}>
          {label}
        </Text>
      </View>

      <Text className="mt-4 text-3xl font-extrabold text-slate-950">
        {value}
      </Text>

      <Text className="mt-1 text-xs leading-4 text-slate-500">
        {description}
      </Text>
    </View>
  );
}