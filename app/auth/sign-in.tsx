import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { Screen } from "@/components/common/Screen";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";

export default function SignInScreen() {
  const router = useRouter();

  return (
    <Screen>
      <View className="flex-1 justify-center">
        <Text className="text-3xl font-extrabold text-slate-950">
          Welcome back
        </Text>

        <Text className="mt-3 text-base leading-6 text-slate-500">
          Sign in to continue to your E-Fix account.
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
          />
        </View>

        <View className="mt-8 gap-3">
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