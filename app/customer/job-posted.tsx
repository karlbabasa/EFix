import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { Screen } from "@/components/common/Screen";
import { Button } from "@/components/ui/Button";

export default function JobPostedScreen() {
    const router = useRouter();

    return (
        <Screen>
            <View className="flex-1 justify-between">
                <View>
                    <View className="h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
                        <Text className="text-2xl">✓</Text>
                    </View>

                    <Text className="mt-8 text-sm font-semibold text-slate-500">
                        Job posted
                    </Text>

                    <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
                        Your request is now open.
                    </Text>

                    <Text className="mt-3 text-base leading-6 text-slate-600">
                        Providers can now review your job and send offers. You can compare
                        them before choosing who to hire.
                    </Text>

                    <View className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
                        <Text className="text-base font-semibold text-slate-950">
                            What happens next
                        </Text>

                        <View className="mt-4 gap-3">
                            <Text className="text-sm leading-5 text-slate-600">
                                1. Providers see your job request.
                            </Text>

                            <Text className="text-sm leading-5 text-slate-600">
                                2. Interested providers send their offer.
                            </Text>

                            <Text className="text-sm leading-5 text-slate-600">
                                3. You choose the provider that fits your needs.
                            </Text>
                        </View>
                    </View>
                </View>

                <View className="gap-3 pb-2">
                    <Button
                        title="View offers"
                        onPress={() => router.replace("/customer/offers")}
                    />

                    <Button
                        title="Post another job"
                        variant="secondary"
                        onPress={() => router.replace("/customer/post-job")}
                    />
                </View>
            </View>
        </Screen>
    );
}