import * as DocumentPicker from "expo-document-picker";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, View } from "react-native";

import { AuthHeader } from "@/components/auth/AuthHeader";
import { AuthNotice } from "@/components/auth/AuthNotice";
import { DocumentRequirementCard } from "@/components/auth/DocumentRequirementCard";
import { ScrollScreen } from "@/components/common/ScrollScreen";
import { Button } from "@/components/ui/Button";
import { supabase } from "@/lib/supabase";
import type { ProviderDocumentType } from "@/types";

type ProviderDocumentItem = {
  title: string;
  description: string;
  required: boolean;
  documentType: ProviderDocumentType;
};

const documents: ProviderDocumentItem[] = [
  {
    title: "Valid government ID",
    description: "Clear photo or PDF of your ID.",
    required: true,
    documentType: "government_id",
  },
  {
    title: "Selfie with ID",
    description: "A selfie while holding the same ID.",
    required: true,
    documentType: "selfie_with_id",
  },
  {
    title: "Barangay or Police Clearance",
    description: "Recent clearance for verification.",
    required: true,
    documentType: "clearance",
  },
  {
    title: "Proof of address",
    description: "Utility bill, barangay certificate, or similar proof.",
    required: true,
    documentType: "proof_of_address",
  },
  {
    title: "Skill certificate",
    description: "Optional, but useful for technical services.",
    required: false,
    documentType: "skill_certificate",
  },
];

export default function ProviderDocumentsScreen() {
  const router = useRouter();
  const [uploadingType, setUploadingType] =
    useState<ProviderDocumentType | null>(null);
  const [uploadedTypes, setUploadedTypes] = useState<ProviderDocumentType[]>([]);

  async function handleChooseFile(documentType: ProviderDocumentType) {
    setUploadingType(documentType);

    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        Alert.alert("Not signed in", "Please sign in again.");
        router.replace("/auth/sign-in");
        return;
      }

      const { data: providerProfile, error: profileError } = await supabase
        .from("provider_profiles")
        .select("id")
        .eq("user_id", user.id)
        .single();

      if (profileError || !providerProfile) {
        Alert.alert(
          "Missing provider profile",
          "Please complete your provider profile first."
        );
        router.replace("/auth/provider-profile");
        return;
      }

      const result = await DocumentPicker.getDocumentAsync({
        copyToCacheDirectory: true,
        multiple: false,
      });

      if (result.canceled) {
        return;
      }

      const file = result.assets[0];

      const response = await fetch(file.uri);
      const arrayBuffer = await response.arrayBuffer();

      const fileExtension = file.name.split(".").pop() ?? "file";
      const filePath = `${user.id}/${documentType}-${Date.now()}.${fileExtension}`;

      const { error: uploadError } = await supabase.storage
        .from("provider-documents")
        .upload(filePath, arrayBuffer, {
          contentType: file.mimeType ?? "application/octet-stream",
          upsert: true,
        });

      if (uploadError) {
        Alert.alert("Upload failed", uploadError.message);
        return;
      }

      const { error: metadataError } = await supabase
        .from("provider_documents")
        .insert({
          provider_profile_id: providerProfile.id,
          document_type: documentType,
          file_path: filePath,
          status: "uploaded",
        });

      if (metadataError) {
        Alert.alert("Document saved, but metadata failed", metadataError.message);
        return;
      }

      setUploadedTypes((current) =>
        current.includes(documentType) ? current : [...current, documentType]
      );

      Alert.alert("Uploaded", "Document uploaded successfully.");
    } catch {
      Alert.alert("Upload failed", "Something went wrong. Please try again.");
    } finally {
      setUploadingType(null);
    }
  }

  function handleSubmitForReview() {
    const missingRequired = documents.filter(
      (document) =>
        document.required && !uploadedTypes.includes(document.documentType)
    );

    if (missingRequired.length > 0) {
      Alert.alert(
        "Missing documents",
        "Please upload all required documents before submitting."
      );
      return;
    }

    router.replace("/auth/provider-pending-review");
  }

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
            key={document.documentType}
            title={
              uploadedTypes.includes(document.documentType)
                ? `${document.title} uploaded`
                : document.title
            }
            description={document.description}
            required={document.required}
            onChooseFile={() => handleChooseFile(document.documentType)}
          />
        ))}
      </View>

      <View className="mt-5">
        <AuthNotice
          tone="warning"
          title="Private documents."
          description="Documents are stored in a private bucket and should only be accessible to you and authorized admins."
        />
      </View>

      <View className="mt-8 gap-3 pb-2">
        <Button
          title={
            uploadingType
              ? "Uploading document..."
              : "Submit for review"
          }
          loading={!!uploadingType}
          onPress={handleSubmitForReview}
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