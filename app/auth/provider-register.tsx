import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { AuthHeader } from "@/components/auth/AuthHeader";
import { AuthNotice } from "@/components/auth/AuthNotice";
import { FormCard } from "@/components/auth/FormCard";
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
    <ScrollScreen className="bg-slate-50">
      <AuthHeader
        eyebrow="Provider application"
        title="Before you apply."
        description="Prepare your profile details and documents so admin can review your account properly."
      />

      <View className="mt-8">
        <FormCard title="Prepare these documents">
          <View className="gap-3">
            {requirements.map((item) => (
              <View key={item} className="flex-row gap-3">
                <View className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />

                <Text className="flex-1 text-sm leading-5 text-slate-600">
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </FormCard>
      </View>

      <View className="mt-5">
        <AuthNotice
          tone="warning"
          title="Documents stay private."
          description="Your submitted documents are for admin review only. Customers should not see these files."
        />
      </View>

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