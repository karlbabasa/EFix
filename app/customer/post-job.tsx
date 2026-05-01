import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { ScrollScreen } from "@/components/common/ScrollScreen";
import { Button } from "@/components/ui/Button";
import { TextArea } from "@/components/ui/TextArea";
import { TextField } from "@/components/ui/TextField";

export default function PostJobScreen() {
    const router = useRouter();

    return (
        <ScrollScreen>
            <Text className="text-sm font-semibold text-slate-500">
                Post a job
            </Text>

            <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
                Tell providers what you need.
            </Text>

            <Text className="mt-3 text-base leading-6 text-slate-600">
                Be clear with the service, location, schedule, and budget so providers
                can send better offers.
            </Text>

            <View className="mt-8 gap-5">
                <TextField
                    label="Job title"
                    placeholder="Example: Fix leaking faucet"
                    autoCapitalize="sentences"
                />

                <TextField
                    label="Category"
                    placeholder="Plumbing, cleaning, errands, documents"
                    autoCapitalize="words"
                />

                <TextArea
                    label="Description"
                    placeholder="Describe the problem or task. Include important details."
                />

                <TextField
                    label="Location"
                    placeholder="Example: Dasmariñas, Cavite"
                    autoCapitalize="words"
                />

                <TextField
                    label="Preferred date and time"
                    placeholder="Example: Tomorrow afternoon"
                />

                <TextField
                    label="Budget"
                    placeholder="Example: ₱500 - ₱1,000"
                    keyboardType="default"
                />
            </View>

            <View className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <Text className="text-sm font-semibold text-amber-900">
                    Keep it legal and safe.
                </Text>

                <Text className="mt-2 text-sm leading-5 text-amber-900">
                    Do not post requests involving fake documents, fixer services,
                    bribery, dangerous items, or anything that bypasses legal processes.
                </Text>
            </View>

            <View className="mt-8 gap-3 pb-2">
                <Button
                    title="Post job"
                    onPress={() => router.replace("/customer/job-posted")}
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