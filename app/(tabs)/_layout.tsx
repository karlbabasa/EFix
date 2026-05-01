import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-50 px-6">
      <Text className="text-4xl font-bold text-blue-600">E-Fix</Text>

      <Text className="mt-3 text-center text-base text-slate-500">
        NativeWind is working.
      </Text>
    </View>
  );
}