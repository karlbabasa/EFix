import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { Screen } from "@/components/common/Screen";
import { Button } from "@/components/ui/Button";

export default function CustomerStartScreen() {
  const router = useRouter();

  return (
    <Screen>
      <View className="flex-1 justify-between">
        <View>
          <Text className="text-sm font-semibold text-slate-500">
            Customer
          </Text>

          <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
            What do you need done?
          </Text>

          <Text className="mt-3 text-base leading-6 text-slate-600">
            Create an account to look for nearby providers, post a job, and keep
            track of your requests.
          </Text>

          <View className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
            <Text className="text-base font-semibold text-slate-950">
              You can do two things
            </Text>

            <View className="mt-4 gap-4">
              <View>
                <Text className="text-sm font-semibold text-slate-900">
                  Search providers
                </Text>
                <Text className="mt-1 text-sm leading-5 text-slate-500">
                  Useful when you already know what service you need.
                </Text>
              </View>

              <View className="h-px bg-slate-100" />

              <View>
                <Text className="text-sm font-semibold text-slate-900">
                  Post a job
                </Text>
                <Text className="mt-1 text-sm leading-5 text-slate-500">
                  Useful when you want providers to send offers.
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="gap-3 pb-2">
          <Button
            title="Create customer account"
            onPress={() => router.push("/auth/customer-register")}
          />

          <Button
            title="I already have an account"
            variant="secondary"
            onPress={() => router.push("/auth/sign-in")}
          />
        </View>
      </View>
    </Screen>
  );
}