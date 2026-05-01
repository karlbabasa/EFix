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
      <Text className="mb-2 text-sm font-medium text-[#374151]">
        {label}
      </Text>

      <TextInput
        multiline
        textAlignVertical="top"
        className={`
          min-h-28 rounded-xl border bg-white px-4 py-3 text-[15px] text-[#111827]
          ${error ? "border-[#DC2626]" : "border-[#E5E7EB]"}
        `}
        placeholderTextColor="#9CA3AF"
        {...props}
      />

      {error ? (
        <Text className="mt-2 text-sm font-medium text-[#DC2626]">
          {error}
        </Text>
      ) : null}
    </View>
  );
}