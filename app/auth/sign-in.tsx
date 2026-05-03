import { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";

import { AuthHeader } from "@/components/auth/AuthHeader";
import { Screen } from "@/components/common/Screen";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";
import { supabase } from "@/lib/supabase";

export default function SignInScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSignIn() {
    if (!email || !password) {
      Alert.alert("Missing details", "Please enter your email and password.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        Alert.alert("Sign in failed", error.message);
        return;
      }

      const userId = data.user.id;

      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", userId)
        .single();

      if (profileError) {
        Alert.alert("Profile error", profileError.message);
        return;
      }

      if (profile.role === "customer") {
        router.replace("/customer/home");
        return;
      }

      if (profile.role === "provider") {
        router.replace("/provider/home");
        return;
      }

      if (profile.role === "admin") {
        router.replace("/admin/home");
        return;
      }

      router.replace("/");
    } catch {
      Alert.alert("Unexpected error", "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Screen className="bg-slate-50">
      <View className="flex-1 justify-between">
        <View>
          <AuthHeader
            eyebrow="Sign in"
            title="Welcome back."
            description="Continue to your E-Fix account."
          />

          <View className="mt-8 rounded-3xl border border-slate-200 bg-white p-5">
            <View className="gap-5">
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
                placeholder="Enter your password"
                secureTextEntry
                autoCapitalize="none"
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <Pressable className="mt-5 active:opacity-70" onPress={() => {}}>
              <Text className="text-sm font-semibold text-slate-600">
                Forgot password?
              </Text>
            </Pressable>
          </View>
        </View>

        <View className="gap-3 pb-2">
          <Button
            title="Sign in"
            loading={isSubmitting}
            onPress={handleSignIn}
          />

          <Button
            title="Back"
            variant="secondary"
            onPress={() => router.back()}
          />
        </View>
      </View>
    </Screen>
  );
}