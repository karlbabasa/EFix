import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { Screen } from "@/components/common/Screen";
import { Button } from "@/components/ui/Button";

export default function ProviderPendingReviewScreen() {
    const router = useRouter();

    return (
        <Screen>
            <View className="flex-1 justify-between">
                <View>
                    <View className="h-14 w-14 items-center justify-center rounded-2xl bg-amber-100">
                        <Text className="text-2xl">✓</Text>
                    </View>

                    <Text className="mt-8 text-sm font-semibold text-slate-500">
                        Pending review
                    </Text>

                    <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
                        Your application was submitted.
                    </Text>

                    <Text className="mt-3 text-base leading-6 text-slate-600">
                        E-Fix will review your profile and documents. You can only accept jobs after approval.
                    </Text>

                    <View className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
                        <Text className="text-base font-semibold text-slate-950">
                            What happens next
                        </Text>

                        <View className="mt-4 gap-3">
                            <Text className="text-sm leading-5 text-slate-600">
                                1. Admin checks your profile details.
                            </Text>

                            <Text className="text-sm leading-5 text-slate-600">
                                2. Admin reviews your submitted documents.
                            </Text>

                            <Text className="text-sm leading-5 text-slate-600">
                                3. You’ll be approved, rejected, or asked to resubmit.
                            </Text>
                        </View>
                    </View>
                </View>

                <View className="gap-3 pb-2">
                    <Button
                        title="Back to home"
                        onPress={() => router.replace("/")}
                    />

                    <Button
                        title="View provider home preview"
                        variant="secondary"
                        onPress={() => router.replace("/provider/home")}
                    />
                </View>
            </View>
        </Screen>
    );
}