import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { ScrollScreen } from "@/components/common/ScrollScreen";
import { Button } from "@/components/ui/Button";
import { TextArea } from "@/components/ui/TextArea";
import { TextField } from "@/components/ui/TextField";

export default function ProviderProfileScreen() {
  const router = useRouter();

  return (
    <ScrollScreen>
      <Text className="text-sm font-semibold text-slate-500">
        Provider profile
      </Text>

      <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
        Tell us what service you offer.
      </Text>

      <Text className="mt-3 text-base leading-6 text-slate-600">
        This helps admin review your application and helps customers understand your service later.
      </Text>

      <View className="mt-8 gap-5">
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
          placeholder="Briefly describe what you usually handle."
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