import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { Screen } from "@/components/common/Screen";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";

export default function SignInScreen() {
  const router = useRouter();

  return (
    <Screen>
      <View className="flex-1 justify-between">
        <View>
          <Text className="text-sm font-semibold text-slate-500">
            Sign in
          </Text>

          <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
            Welcome back.
          </Text>

          <Text className="mt-3 text-base leading-6 text-slate-600">
            Continue to your E-Fix account.
          </Text>

          <View className="mt-8 gap-5">
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

          <Pressable className="mt-4 active:opacity-70" onPress={() => {}}>
            <Text className="text-sm font-semibold text-slate-600">
              Forgot password?
            </Text>
          </Pressable>
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