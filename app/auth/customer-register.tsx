import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { ScrollScreen } from "@/components/common/ScrollScreen";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";

export default function CustomerRegisterScreen() {
  const router = useRouter();

  return (
    <ScrollScreen>
      <Text className="text-sm font-semibold text-slate-500">
        Customer account
      </Text>

      <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
        Create your account.
      </Text>

      <Text className="mt-3 text-base leading-6 text-slate-600">
        Use this to post jobs, contact providers, and track requests.
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
          autoCapitalize="none"
        />

        <TextField
          label="Confirm password"
          placeholder="Repeat your password"
          secureTextEntry
          autoCapitalize="none"
        />
      </View>

      <View className="mt-8 rounded-2xl border border-slate-200 bg-white p-4">
        <Text className="text-sm font-semibold text-slate-950">
          Keep requests legal and safe.
        </Text>

        <Text className="mt-2 text-sm leading-5 text-slate-500">
          E-Fix does not allow fake documents, fixer services, bribery, or unsafe job requests.
        </Text>
      </View>

      <View className="mt-8 gap-3 pb-2">
        <Button title="Create account" onPress={() => {}} />

        <Button
          title="Back"
          variant="secondary"
          onPress={() => router.back()}
        />
      </View>
    </ScrollScreen>
  );
}