import { TextInput, View } from "react-native";

type SearchBarProps = {
  value: string;
  placeholder: string;
  onChangeText: (value: string) => void;
};

export function SearchBar({
  value,
  placeholder,
  onChangeText,
}: SearchBarProps) {
  return (
    <View className="rounded-2xl border border-slate-200 bg-white px-4">
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#94a3b8"
        autoCapitalize="none"
        className="h-12 text-[15px] text-slate-950"
      />
    </View>
  );
}