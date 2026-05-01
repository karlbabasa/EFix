import { useRouter } from "expo-router";
import { View } from "react-native";

import { AuthHeader } from "@/components/auth/AuthHeader";
import { AuthNotice } from "@/components/auth/AuthNotice";
import { DocumentRequirementCard } from "@/components/auth/DocumentRequirementCard";
import { ScrollScreen } from "@/components/common/ScrollScreen";
import { Button } from "@/components/ui/Button";

const documents = [
  {
    title: "Valid government ID",
    description: "Clear photo or PDF of your ID.",
    required: true,
  },
  {
    title: "Selfie with ID",
    description: "A selfie while holding the same ID.",
    required: true,
  },
  {
    title: "Barangay or Police Clearance",
    description: "Recent clearance for verification.",
    required: true,
  },
  {
    title: "Proof of address",
    description: "Utility bill, barangay certificate, or similar proof.",
    required: true,
  },
  {
    title: "Skill certificate",
    description: "Optional, but useful for technical services.",
    required: false,
  },
];

export default function ProviderDocumentsScreen() {
  const router = useRouter();

  return (
    <ScrollScreen className="bg-slate-50">
      <AuthHeader
        eyebrow="Document review"
        title="Upload your documents."
        description="These files help admin verify your provider application. They should not be shown to customers."
      />

      <View className="mt-8 gap-3">
        {documents.map((document) => (
          <DocumentRequirementCard
            key={document.title}
            title={document.title}
            description={document.description}
            required={document.required}
            onChooseFile={() => {}}
          />
        ))}
      </View>

      <View className="mt-5">
        <AuthNotice
          tone="warning"
          title="Store documents carefully later."
          description="When backend storage is added, these files should be private and accessible only to authorized admin users."
        />
      </View>

      <View className="mt-8 gap-3 pb-2">
        <Button
          title="Submit for review"
          onPress={() => router.replace("/auth/provider-pending-review")}
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