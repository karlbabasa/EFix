import { useLocalSearchParams, useRouter } from "expo-router";
import { View } from "react-native";

import { demoJobs } from "@/data";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { AuthNotice } from "@/components/auth/AuthNotice";
import { FormCard } from "@/components/auth/FormCard";
import { AppScrollView } from "@/components/common/AppScrollView";
import { DetailRow } from "@/components/common/DetailRow";
import { Button } from "@/components/ui/Button";

export default function ProviderJobDetailsScreen() {
    const router = useRouter();
    const { jobId } = useLocalSearchParams<{ jobId?: string }>();

    const job = demoJobs.find((item) => item.id === jobId) ?? demoJobs[0];

    return (
        <AppScrollView>
            <AuthHeader
                eyebrow="Job details"
                title={job.title}
                description="Review the customer request before sending an offer."
            />

            <View className="mt-8">
                <FormCard title="Request details">
                    <DetailRow label="Category" value={job.category} />
                    <DetailRow label="Location" value={job.location} />
                    <DetailRow label="Budget" value={job.budget} />
                    <DetailRow label="Schedule" value={job.schedule} />
                </FormCard>
            </View>

            <View className="mt-5">
                <FormCard title="Description">
                    <DetailRow label="Request" value={job.description} />
                </FormCard>
            </View>

            <View className="mt-5">
                <AuthNotice
                    tone="warning"
                    title="Check before offering."
                    description="Only send an offer if the request is legal, safe, and within your verified service."
                />
            </View>

            <View className="mt-8 gap-3 pb-2">
                <Button
                    title="Send offer"
                    onPress={() =>
                        router.push({
                            pathname: "/provider/send-offer",
                            params: { jobId: job.id },
                        })
                    }
                />

                <Button
                    title="Report this job"
                    variant="secondary"
                    onPress={() => router.push("/report")}
                />

                <Button
                    title="Back"
                    variant="ghost"
                    onPress={() => router.back()}
                />
            </View>
        </AppScrollView>
    );
}