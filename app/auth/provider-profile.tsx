import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { ScrollScreen } from "@/components/common/ScrollScreen";
import { Button } from "@/components/ui/Button";
import { TextArea } from "@/components/ui/TextArea";
import { TextField } from "@/components/ui/TextField";

export default function ProviderProfileScreen() {
    const router = useRouter();

    return (
        <ScrollScreen>
            <Text className="text-3xl font-extrabold text-slate-950">
                Provider profile
            </Text>

            <Text className="mt-3 text-base leading-6 text-slate-500">
                Tell customers what you do. This information will be reviewed together
                with your documents.
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
                    label="Main service"
                    placeholder="Example: Plumbing, Cleaning, Document assistance"
                    autoCapitalize="words"
                />

                <TextField
                    label="Service area"
                    placeholder="Example: Dasmariñas, Cavite"
                    autoCapitalize="words"
                />

                <TextField
                    label="Years of experience"
                    placeholder="Example: 2 years"
                    keyboardType="default"
                />

                <TextArea
                    label="Short service description"
                    placeholder="Example: I handle basic plumbing repairs, faucet replacement, pipe leaks, and home maintenance requests."
                />
            </View>

            <View className="mt-8 gap-3">
                <Button
                    title="Continue to documents"
                    onPress={() => router.push("/auth/provider-documents")}
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