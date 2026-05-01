import { useRouter } from "expo-router";
import { View } from "react-native";

import { AuthHeader } from "@/components/auth/AuthHeader";
import { AuthNotice } from "@/components/auth/AuthNotice";
import { FormCard } from "@/components/auth/FormCard";
import { ScrollScreen } from "@/components/common/ScrollScreen";
import { Button } from "@/components/ui/Button";
import { TextArea } from "@/components/ui/TextArea";
import { TextField } from "@/components/ui/TextField";

export default function ProviderProfileScreen() {
  const router = useRouter();

  return (
    <ScrollScreen className="bg-slate-50">
      <AuthHeader
        eyebrow="Provider profile"
        title="Tell us what you offer."
        description="This information helps admin review your application and helps customers understand your service later."
      />

      <View className="mt-8">
        <FormCard title="Basic information">
          <View className="gap-5">
            <TextField
              label="Full name"
              placeholder="Juan Dela Cruz"
              autoCapitalize="words"
            />

            <TextField
              label="Mobile number"
              placeholder="09XX XXX XXXX"
              keyboardType="phone-pad"
            />

            <TextField
              label="Email address"
              placeholder="you@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </FormCard>
      </View>

      <View className="mt-5">
        <FormCard title="Service details">
          <View className="gap-5">
            <TextField
              label="Main service"
              placeholder="Plumbing, cleaning, document assistance"
              autoCapitalize="words"
            />

            <TextField
              label="Service area"
              placeholder="Dasmariñas, Cavite"
              autoCapitalize="words"
            />

            <TextField
              label="Experience"
              placeholder="Example: 2 years"
            />

            <TextArea
              label="Short description"
              placeholder="Briefly describe what jobs you usually handle."
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
          onPress={() => router.push("/auth/provider-documents")}
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