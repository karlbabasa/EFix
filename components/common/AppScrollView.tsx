import { ReactNode } from "react";
import { ScrollView } from "react-native";

type AppScrollViewProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function AppScrollView({
  children,
  className = "",
  contentClassName = "",
}: AppScrollViewProps) {
  return (
    <ScrollView
      className={`flex-1 bg-slate-50 ${className}`}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerClassName={`px-5 py-5 pb-32 ${contentClassName}`}
    >
      {children}
    </ScrollView>
  );
}