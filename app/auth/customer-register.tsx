import { useState } from "react";
import { Alert, View } from "react-native";
import { useRouter } from "expo-router";

import { AuthHeader } from "@/components/auth/AuthHeader";
import { AuthNotice } from "@/components/auth/AuthNotice";
import { FormCard } from "@/components/auth/FormCard";
import { ScrollScreen } from "@/components/common/ScrollScreen";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";
import { supabase } from "@/lib/supabase";

export default function CustomerRegisterScreen() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleCreateAccount() {
    if (!fullName || !mobileNumber || !email || !password || !confirmPassword) {
      Alert.alert("Missing details", "Please complete all fields.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Password mismatch", "Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          mobile_number: mobileNumber,
          role: "customer",
        },
      },
    });

    if (error) {
      setIsSubmitting(false);
      Alert.alert("Sign up failed", error.message);
      return;
    }

  return (
    <ScrollScreen className="bg-slate-50">
      <AuthHeader
        eyebrow="Customer account"
        title="Create your account."
        description="Use this to post jobs, compare offers, and track your requests."
      />

      <View className="mt-8">
        <FormCard title="Account details">
          <View className="gap-5">
            <TextField
              label="Full name"
              placeholder="Juan Dela Cruz"
              autoCapitalize="words"
              value={fullName}
              onChangeText={setFullName}
            />

            <TextField
              label="Mobile number"
              placeholder="09XX XXX XXXX"
              keyboardType="phone-pad"
              value={mobileNumber}
              onChangeText={setMobileNumber}
            />

            <TextField
              label="Email address"
              placeholder="you@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <TextField
              label="Password"
              placeholder="Create a password"
              secureTextEntry
              autoCapitalize="none"
              value={password}
              onChangeText={setPassword}
            />

            <TextField
              label="Confirm password"
              placeholder="Repeat your password"
              secureTextEntry
              autoCapitalize="none"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>
        </FormCard>
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
          loading={isSubmitting}
          onPress={handleCreateAccount}
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