import { ReactNode } from "react";
import { Text, View } from "react-native";

type FormCardProps = {
  title?: string;
  children: ReactNode;
};

export function FormCard({ title, children }: FormCardProps) {
  return (
    <View className="rounded-3xl border border-slate-200 bg-white p-5">
      {title ? (
        <Text className="mb-5 text-base font-bold text-slate-950">
          {title}
        </Text>
      ) : null}

      {children}
    </View>
  );
}