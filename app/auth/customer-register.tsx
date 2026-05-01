import { useRouter } from "expo-router";
import { View } from "react-native";

import { AuthHeader } from "@/components/auth/AuthHeader";
import { AuthNotice } from "@/components/auth/AuthNotice";
import { ScrollScreen } from "@/components/common/ScrollScreen";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";

export default function CustomerRegisterScreen() {
  const router = useRouter();

  return (
    <ScrollScreen className="bg-slate-50">
      <AuthHeader
        eyebrow="Customer account"
        title="Create your account."
        description="Use this to post jobs, compare offers, and track your requests."
      />

      <View className="mt-8 rounded-3xl border border-slate-200 bg-white p-5">
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

          <TextField
            label="Password"
            placeholder="Create a password"
            secureTextEntry
            autoCapitalize="none"
          />

          <TextField
            label="Confirm password"
            placeholder="Repeat your password"
            secureTextEntry
            autoCapitalize="none"
          />
        </View>
      </View>

      <View className="mt-5">
        <AuthNotice
          tone="warning"
          title="Keep requests legal and safe."
          description="E-Fix does not allow fake documents, fixer services, bribery, or unsafe job requests."
        />
      </View>

      <View className="mt-8 gap-3 pb-2">
        <Button
          title="Create account"
          onPress={() => router.replace("/customer/home")}
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