import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";

import { Button } from "@/components/ui/Button";

type DocumentRequirementCardProps = {
  title: string;
  description: string;
  required?: boolean;
  onChooseFile: () => void;
};

export function DocumentRequirementCard({
  title,
  description,
  required = false,
  onChooseFile,
}: DocumentRequirementCardProps) {
  return (
    <View className="rounded-2xl border border-slate-200 bg-white p-5">
      <View className="flex-row items-start justify-between gap-4">
        <View className="flex-1">
          <View className="h-10 w-10 items-center justify-center rounded-full bg-slate-100">
            <Ionicons name="document-text-outline" size={20} color="#334155" />
          </View>

          <Text className="mt-4 text-base font-bold text-slate-950">
            {title}
          </Text>

          <Text className="mt-1 text-sm leading-5 text-slate-500">
            {description}
          </Text>
        </View>

        <View
          className={`rounded-full px-3 py-1 ${
            required ? "bg-red-50" : "bg-slate-100"
          }`}
        >
          <Text
            className={`text-xs font-semibold ${
              required ? "text-red-700" : "text-slate-500"
            }`}
          >
            {required ? "Required" : "Optional"}
          </Text>
        </View>
      </View>

      <View className="mt-4">
        <Button title="Choose file" variant="secondary" onPress={onChooseFile} />
      </View>
    </View>
  );
}