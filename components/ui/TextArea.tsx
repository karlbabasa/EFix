import { Text, TextInput, TextInputProps, View } from "react-native";

type TextAreaProps = TextInputProps & {
  label: string;
  error?: string;
  className?: string;
};

export function TextArea({
  label,
  error,
  className = "",
  ...props
}: TextAreaProps) {
  return (
    <View className={`w-full ${className}`}>
      <Text className="mb-2 text-sm font-semibold text-slate-700">
        {label}
      </Text>

      <TextInput
        multiline
        textAlignVertical="top"
        className={`
          min-h-32 rounded-2xl border bg-white px-4 py-4 text-base text-slate-950
          ${error ? "border-red-400" : "border-slate-200"}
        `}
        placeholderTextColor="#94a3b8"
        {...props}
      />

      {error ? (
        <Text className="mt-2 text-sm font-medium text-red-600">{error}</Text>
      ) : null}
    </View>
  );
}