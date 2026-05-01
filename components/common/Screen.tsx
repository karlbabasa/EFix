import { ReactNode } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ScreenProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function Screen({
  children,
  className = "",
  contentClassName = "",
}: ScreenProps) {
  return (
    <SafeAreaView className={`flex-1 bg-[#F8FAFC] ${className}`}>
      <View className={`flex-1 px-5 py-5 ${contentClassName}`}>
        {children}
      </View>
    </SafeAreaView>
  );
}