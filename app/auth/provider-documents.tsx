import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { ScrollScreen } from "@/components/common/ScrollScreen";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const documents = [
    {
        title: "Valid government ID",
        description: "Upload a clear photo or PDF of your ID.",
        required: true,
    },
    {
        title: "Selfie with ID",
        description: "Take a clear selfie while holding the same ID.",
        required: true,
    },
    {
        title: "Barangay or Police Clearance",
        description: "Upload a recent clearance for verification.",
        required: true,
    },
    {
        title: "Proof of address",
        description: "Utility bill, barangay certificate, or similar proof.",
        required: true,
    },
    {
        title: "Skill certificate",
        description: "Optional certificate for technical services.",
        required: false,
    },
];

export default function ProviderDocumentsScreen() {
    const router = useRouter();

    return (
        <ScrollScreen>
            <Badge label="Document review" tone="warning" />

            <Text className="mt-5 text-3xl font-extrabold text-slate-950">
                Submit your documents
            </Text>

            <Text className="mt-3 text-base leading-6 text-slate-500">
                These documents help E-Fix review your provider application. Customers will not see these files.
            </Text>

            <View className="mt-8 gap-4">
                {documents.map((document) => (
                    <View
                        key={document.title}
                        className="rounded-3xl border border-slate-200 bg-white p-5"
                    >
                        <View className="flex-row items-start justify-between gap-4">
                            <View className="flex-1">
                                <Text className="text-base font-extrabold text-slate-950">
                                    {document.title}
                                </Text>

                                <Text className="mt-2 text-sm leading-5 text-slate-500">
                                    {document.description}
                                </Text>
                            </View>

                            <Badge
                                label={document.required ? "Required" : "Optional"}
                                tone={document.required ? "danger" : "neutral"}
                            />
                        </View>

                        <View className="mt-5">
                            <Button
                                title="Choose file"
                                variant="secondary"
                                onPress={() => { }}
                            />
                        </View>
                    </View>
                ))}
            </View>

            <View className="mt-8 rounded-3xl bg-blue-50 p-5">
                <Text className="text-base font-extrabold text-blue-900">
                    Privacy note
                </Text>

                <Text className="mt-2 text-sm leading-5 text-blue-900">
                    Your documents are used only for provider verification. Admins review them before approving your account.
                </Text>
            </View>

            <View className="mt-8 gap-3">
                <Button
                    title="Submit for review"
                    onPress={() => router.replace("/auth/provider-pending-review")}
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