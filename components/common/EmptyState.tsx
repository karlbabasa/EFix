import { Text, View } from "react-native";

import { Button } from "@/components/ui/Button";

type EmptyStateProps = {
  title: string;
  description: string;
  actionTitle?: string;
  onAction?: () => void;
};

export function EmptyState({
  title,
  description,
  actionTitle,
  onAction,
}: EmptyStateProps) {
  return (
    <View className="rounded-3xl border border-dashed border-slate-300 bg-white p-6">
      <View className="h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
        <Text className="text-xl font-bold text-slate-500">—</Text>
      </View>

      <Text className="mt-5 text-lg font-extrabold text-slate-950">
        {title}
      </Text>

      <Text className="mt-2 text-sm leading-5 text-slate-500">
        {description}
      </Text>

      {actionTitle && onAction ? (
        <View className="mt-5">
          <Button
            title={actionTitle}
            variant="secondary"
            onPress={onAction}
          />
        </View>
      ) : null}
    </View>
  );
}