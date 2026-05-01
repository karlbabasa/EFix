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
      <Text className="mb-2 text-sm font-medium text-slate-700">
        {label}
      </Text>

      <TextInput
        className={`
          h-12 rounded-xl border bg-white px-4 text-[15px] text-slate-950
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