import { Text, View } from "react-native";

import { Screen } from "@/components/common/Screen";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

import { useRouter } from "expo-router";

const router = useRouter();

export default function CustomerStartScreen() {
    return (
        <Screen>
            <View className="flex-1 justify-center">
                <Badge label="Customer" tone="info" />

                <Text className="mt-5 text-3xl font-extrabold text-slate-950">
                    What do you need help with?
                </Text>

                <Text className="mt-3 text-base leading-6 text-slate-500">
                    Search for a provider or post a job and let providers send offers.
                </Text>

                <View className="mt-8 gap-3">
                    <View className="mt-8 gap-3">
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
            </View>
        </Screen>
    );
}