import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { ScrollScreen } from "@/components/common/ScrollScreen";
import { Button } from "@/components/ui/Button";

const requirements = [
  "Valid government ID",
  "Selfie with your ID",
  "Barangay Clearance or Police Clearance",
  "Proof of address",
  "Skill certificate, if applicable",
];

export default function ProviderRegisterScreen() {
  const router = useRouter();

  return (
    <ScrollScreen>
      <Text className="text-sm font-semibold text-slate-500">
        Provider application
      </Text>

      <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
        Let’s check if you’re ready to apply.
      </Text>

      <Text className="mt-3 text-base leading-6 text-slate-600">
        Before you can accept jobs, E-Fix needs to review your profile and documents.
      </Text>

      <View className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
        <Text className="text-base font-semibold text-slate-950">
          Prepare these first
        </Text>

        <View className="mt-4 gap-3">
          {requirements.map((item) => (
            <Text key={item} className="text-sm leading-5 text-slate-600">
              • {item}
            </Text>
          ))}
        </View>
      </View>

      <View className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <Text className="text-sm font-semibold text-amber-900">
          Important
        </Text>

        <Text className="mt-2 text-sm leading-5 text-amber-900">
          Your documents are for admin review only. Customers will not see them.
        </Text>
      </View>

      <Text className="mt-5 text-xs leading-5 text-slate-400">
        E-Fix does not allow fake documents, fixer services, bribery, or requests that bypass legal processes.
      </Text>

      <View className="mt-8 gap-3 pb-2">
        <Button
          title="Continue application"
          onPress={() => router.push("/auth/provider-profile")}
        />

        <Button
          title="Back"
          variant="secondary"
          onPress={() => router.back()}
        />
      </View>
    </ScrollScreen>
  );
}