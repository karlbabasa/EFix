import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { EmptyState } from "@/components/common/EmptyState";
import { demoReports } from "@/data";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { AdminReportCard } from "@/components/admin/reviews/AdminReportCard";
import { ScrollScreen } from "@/components/common/ScrollScreen";

function formatStatus(status: string) {
    return status.replace("_", " ");
}

export default function AdminReportReviewsScreen() {
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
                eyebrow="Report reviews"
                title="Open safety cases."
                description="Review reported issues, disputes, unsafe behavior, and possible policy violations."
            />

            <View className="mt-8 gap-3">
                {demoReports.length > 0 ? (
                    demoReports.map((report) => (
                        <AdminReportCard
                            key={report.id}
                            reporter={report.reporter}
                            reportedUser={report.reportedUser}
                            reason={report.reason}
                            jobTitle={report.jobTitle}
                            submittedAt={report.submittedAt}
                            status={formatStatus(report.status)}
                            onReview={() =>
                                router.push({
                                    pathname: "/admin/report-review-detail",
                                    params: { reportId: report.id },
                                })
                            }
                        />
                    ))
                ) : (
                    <EmptyState
                        title="No open reports"
                        description="Safety reports and disputes will appear here when submitted."
                    />
                )}
            </View>
        </ScrollScreen>
    );
}