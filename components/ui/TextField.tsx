import { Text, TextInput, TextInputProps, View } from "react-native";

type TextFieldProps = TextInputProps & {
  label: string;
  error?: string;
  className?: string;
};

export function TextField({
  label,
  error,
  className = "",
  ...props
}: TextFieldProps) {
  return (
    <View className={`w-full ${className}`}>
      <Text className="mb-2 text-sm font-medium text-[#374151]">
        {label}
      </Text>

      <TextInput
        className={`
          h-12 rounded-xl border bg-white px-4 text-[15px] text-[#111827]
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