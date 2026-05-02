import { ReactNode } from "react";
import { View } from "react-native";

type AppViewProps = {
  children: ReactNode;
  className?: string;
};

export function AppView({ children, className = "" }: AppViewProps) {
  return (
    <View className={`flex-1 bg-slate-50 px-5 py-5 pb-32 ${className}`}>
      {children}
    </View>
  );
}