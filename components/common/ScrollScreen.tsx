import { ReactNode } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ScrollScreenProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function ScrollScreen({
  children,
  className = "",
  contentClassName = "",
}: ScrollScreenProps) {
  return (
    <SafeAreaView className={`flex-1 bg-slate-50 ${className}`}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerClassName={`flex-grow px-5 py-6 ${contentClassName}`}
      >
        <View>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}