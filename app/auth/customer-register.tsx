import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { ScrollScreen } from "@/components/common/ScrollScreen";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";

export default function CustomerRegisterScreen() {
  const router = useRouter();

  return (
    <ScrollScreen contentClassName="justify-center">
      <Text className="text-3xl font-extrabold text-slate-950">
        Create customer account
      </Text>

      <Text className="mt-3 text-base leading-6 text-slate-500">
        Use this account to search for providers, post jobs, and track your requests.
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
          label="Password"
          placeholder="Create a password"
          secureTextEntry
        />

        <TextField
          label="Confirm password"
          placeholder="Repeat your password"
          secureTextEntry
        />
      </View>

      <View className="mt-8 gap-3">
        <Button title="Create account" onPress={() => {}} />

        <Button
          title="Back"
          variant="secondary"
          onPress={() => router.back()}
        />
      </View>

      <Text className="mt-6 text-center text-xs leading-5 text-slate-400">
        By continuing, you agree to follow E-Fix rules and avoid illegal or unsafe job requests.
      </Text>
    </ScrollScreen>
  );
}