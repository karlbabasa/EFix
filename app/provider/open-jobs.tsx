import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { AuthHeader } from "@/components/auth/AuthHeader";
import { ScrollScreen } from "@/components/common/ScrollScreen";
import { ProviderJobCard } from "@/components/provider/jobs/ProviderJobCard";

const openJobs = [
    {
        id: "faucet",
        title: "Fix leaking faucet",
        category: "Plumbing",
        location: "Dasmariñas, Cavite",
        budget: "₱500+",
        schedule: "Tomorrow afternoon",
    },
    {
        id: "cleaning",
        title: "House cleaning",
        category: "Cleaning",
        location: "Imus, Cavite",
        budget: "₱800+",
        schedule: "This weekend",
    },
    {
        id: "documents",
        title: "Document pickup assistance",
        category: "Documents",
        location: "Trece Martires, Cavite",
        budget: "₱300+",
        schedule: "Friday morning",
    },
];

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
                {openJobs.map((job) => (
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
                ))}
            </View>
        </ScrollScreen>
    );
}