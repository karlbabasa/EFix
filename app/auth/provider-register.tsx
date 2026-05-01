import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { ScrollScreen } from "@/components/common/ScrollScreen";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const requirements = [
    "Valid government ID",
    "Selfie with your ID",
    "Barangay Clearance or Police Clearance",
    "Proof of address",
    "Skill certificate, if applicable",
];

const safetyRules = [
    "Your documents are for admin review only.",
    "Customers will not see your submitted documents.",
    "You can accept jobs only after approval.",
];

export default function ProviderRegisterScreen() {
    const router = useRouter();

    return (
        <ScrollScreen>
            <Badge label="Provider application" tone="warning" />

            <Text className="mt-5 text-3xl font-extrabold text-slate-950">
                Before you offer services
            </Text>

            <Text className="mt-3 text-base leading-6 text-slate-500">
                E-Fix reviews provider applications first so customers can book with more confidence.
            </Text>

            <View className="mt-8 rounded-3xl bg-white p-5">
                <Text className="text-lg font-extrabold text-slate-950">
                    Prepare these documents
                </Text>

                <View className="mt-4 gap-3">
                    {requirements.map((item) => (
                        <View key={item} className="flex-row gap-3">
                            <View className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" />
                            <Text className="flex-1 text-sm leading-5 text-slate-600">
                                {item}
                            </Text>
                        </View>
                    ))}
                </View>
            </View>

            <View className="mt-4 rounded-3xl border border-amber-200 bg-amber-50 p-5">
                <Text className="text-lg font-extrabold text-amber-900">
                    Important
                </Text>

                <View className="mt-4 gap-3">
                    {safetyRules.map((item) => (
                        <View key={item} className="flex-row gap-3">
                            <View className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-600" />
                            <Text className="flex-1 text-sm leading-5 text-amber-900">
                                {item}
                            </Text>
                        </View>
                    ))}
                </View>
            </View>

            <Text className="mt-5 text-xs leading-5 text-slate-400">
                E-Fix does not allow fake documents, fixer services, bribery, or requests that bypass legal processes.
            </Text>

            <View className="mt-8 gap-3">
                <Button
                    title="Continue application"
                    onPress={() => router.push("/auth/provider-profile")}
                />

                <Button
                    title="Back"
                    variant="secondary"
                    onPress={() => router.back()}
                />
            </View>
        </ScrollScreen>
    );
}