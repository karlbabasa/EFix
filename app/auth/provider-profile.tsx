import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, View } from "react-native";

import { AuthHeader } from "@/components/auth/AuthHeader";
import { AuthNotice } from "@/components/auth/AuthNotice";
import { FormCard } from "@/components/auth/FormCard";
import { ScrollScreen } from "@/components/common/ScrollScreen";
import { Button } from "@/components/ui/Button";
import { TextArea } from "@/components/ui/TextArea";
import { TextField } from "@/components/ui/TextField";
import { supabase } from "@/lib/supabase";

export default function ProviderProfileScreen() {
  const router = useRouter();

  const [mainService, setMainService] = useState("");
  const [serviceArea, setServiceArea] = useState("");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleContinue() {
    if (!mainService || !serviceArea || !experience || !description) {
      Alert.alert("Missing details", "Please complete all provider profile fields.");
      return;
    }

    setIsSubmitting(true);

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

      const { error } = await supabase.from("provider_profiles").upsert(
        {
          user_id: user.id,
          main_service: mainService.trim(),
          service_area: serviceArea.trim(),
          experience: experience.trim(),
          description: description.trim(),
          status: "pending",
        },
        {
          onConflict: "user_id",
        }
      );

      if (error) {
        Alert.alert("Profile error", error.message);
        return;
      }

      router.push("/auth/provider-documents");
    } catch {
      Alert.alert("Unexpected error", "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <ScrollScreen className="bg-slate-50">
      <AuthHeader
        eyebrow="Provider profile"
        title="Tell us what you offer."
        description="This information helps admin review your application and helps customers understand your service later."
      />

      <View className="mt-8">
        <FormCard title="Service details">
          <View className="gap-5">
            <TextField
              label="Main service"
              placeholder="Plumbing, cleaning, document assistance"
              autoCapitalize="words"
              value={mainService}
              onChangeText={setMainService}
            />

            <TextField
              label="Service area"
              placeholder="Dasmariñas, Cavite"
              autoCapitalize="words"
              value={serviceArea}
              onChangeText={setServiceArea}
            />

            <TextField
              label="Experience"
              placeholder="Example: 2 years"
              value={experience}
              onChangeText={setExperience}
            />

            <TextArea
              label="Short description"
              placeholder="Briefly describe what jobs you usually handle."
              value={description}
              onChangeText={setDescription}
            />
          </View>
        </FormCard>
      </View>

      <View className="mt-5">
        <AuthNotice
          title="Review first, access later."
          description="You can only accept real jobs after your provider account is approved."
        />
      </View>

      <View className="mt-8 gap-3 pb-2">
        <Button
          title="Continue to documents"
          loading={isSubmitting}
          onPress={handleContinue}
        />

        <Button title="Back" variant="secondary" onPress={() => router.back()} />
      </View>
    </ScrollScreen>
  );
}