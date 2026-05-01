import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-50 px-6">
      <View className="h-24 w-24 items-center justify-center rounded-3xl bg-blue-600">
        <Text className="text-4xl font-extrabold text-white">EF</Text>
      </View>

      <Text className="mt-6 text-4xl font-extrabold text-slate-950">
        E-Fix
      </Text>

      <Text className="mt-3 text-center text-base leading-6 text-slate-500">
        Find trusted service providers or post a job request.
      </Text>
    </View>
  );
}