import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { AuthHeader } from "@/components/auth/AuthHeader";
import { Screen } from "@/components/common/Screen";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";

export default function SignInScreen() {
  const router = useRouter();

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
              />

              <TextField
                label="Password"
                placeholder="Enter your password"
                secureTextEntry
                autoCapitalize="none"
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
          <Button title="Sign in" onPress={() => {}} />

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