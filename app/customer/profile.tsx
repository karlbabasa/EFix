import { useRouter } from "expo-router";
import { Text, View, Alert, } from "react-native";

import { FormCard } from "@/components/auth/FormCard";
import { AppScrollView } from "@/components/common/AppScrollView";
import { DetailRow } from "@/components/common/DetailRow";
import { CustomerBottomNav } from "@/components/customer/navigation/CustomerBottomNav";
import { Button } from "@/components/ui/Button";

import { supabase } from "@/lib/supabase";

export default function CustomerProfileScreen() {
    const router = useRouter();

    async function handleSignOut() {
        const { error } = await supabase.auth.signOut();

        if (error) {
            Alert.alert("Sign out failed", error.message);
            return;
        }

        router.replace("/");
    }

    return (
        <AppScrollView className="bg-slate-50" contentClassName="pb-28">
            <View className="flex-1">
                <Text className="text-sm font-semibold text-slate-500">
                    Profile
                </Text>

                <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
                    Your account.
                </Text>

                <Text className="mt-3 text-base leading-6 text-slate-600">
                    Manage your basic customer information and account preferences.
                </Text>

                <View className="mt-8">
                    <FormCard title="Account details">
                        <DetailRow label="Name" value="Karl Babasa" />
                        <DetailRow label="Mobile" value="09XX XXX XXXX" />
                        <DetailRow label="Email" value="karl@example.com" />
                        <DetailRow label="Role" value="Customer" />
                    </FormCard>
                </View>

                <View className="mt-5">
                    <FormCard title="Safety">
                        <Text className="text-sm leading-6 text-slate-600">
                            Reports, disputes, and blocked users will appear here later.
                        </Text>

                        <View className="mt-4">
                            <Button
                                title="Report an issue"
                                variant="secondary"
                                onPress={() => router.push("/report")}
                            />
                        </View>
                    </FormCard>
                </View>

                <View className="mt-5">
                    <FormCard title="Account actions">
                        <Button
                            title="Sign out"
                            variant="secondary"
                            onPress={handleSignOut}
                        />
                    </FormCard>
                </View>
            </View>
        </AppScrollView>
    );
}