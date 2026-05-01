import { Text, View } from "react-native";

type AuthNoticeProps = {
  title: string;
  description: string;
  tone?: "default" | "warning";
};

export function AuthNotice({
  title,
  description,
  tone = "default",
}: AuthNoticeProps) {
  const isWarning = tone === "warning";

  return (
    <View
      className={`rounded-2xl border p-4 ${
        isWarning
          ? "border-amber-200 bg-amber-50"
          : "border-slate-200 bg-white"
      }`}
    >
      <Text
        className={`text-sm font-bold ${
          isWarning ? "text-amber-900" : "text-slate-950"
        }`}
      >
        {title}
      </Text>

      <Text
        className={`mt-2 text-sm leading-5 ${
          isWarning ? "text-amber-900" : "text-slate-500"
        }`}
      >
        {description}
      </Text>
    </View>
  );
}