import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { EmptyState } from "@/components/common/EmptyState";
import { demoJobs } from "@/data";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { ScrollScreen } from "@/components/common/ScrollScreen";
import { ProviderJobCard } from "@/components/provider/jobs/ProviderJobCard";

export default function ProviderOpenJobsScreen() {
    const router = useRouter();

    return (
        <ScrollScreen className="bg-slate-50">
            <Pressable
                className="mb-6 self-start active:opacity-70"
                onPress={() => router.back()}
            >
                <Text className="text-sm font-semibold text-slate-600">
                    ← Back
                </Text>
            </Pressable>

            <AuthHeader
                eyebrow="Open jobs"
                title="Available requests nearby."
                description="Review sample customer requests and send an offer if the job matches your service."
            />

            <View className="mt-8 gap-3">
                {demoJobs.length > 0 ? (
                    demoJobs.map((job) => (
                        <ProviderJobCard
                            key={job.id}
                            title={job.title}
                            category={job.category}
                            location={job.location}
                            budget={job.budget}
                            schedule={job.schedule}
                            onViewDetails={() =>
                                router.push({
                                    pathname: "/provider/job-details",
                                    params: { jobId: job.id },
                                })
                            }
                        />
                    ))
                ) : (
                    <EmptyState
                        title="No open jobs yet"
                        description="New customer requests will appear here once they are posted."
                    />
                )}
            </View>
        </ScrollScreen>
    );
}