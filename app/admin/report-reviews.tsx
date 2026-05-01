import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { AuthHeader } from "@/components/auth/AuthHeader";
import { AdminReportCard } from "@/components/admin/reviews/AdminReportCard";
import { ScrollScreen } from "@/components/common/ScrollScreen";

const reports = [
  {
    id: "no-show",
    reporter: "Customer Karl B.",
    reportedUser: "Provider Mark D.",
    reason: "No show",
    jobTitle: "Fix leaking faucet",
    submittedAt: "Today, 10:15 AM",
    status: "Open",
  },
  {
    id: "illegal-request",
    reporter: "Provider Jun R.",
    reportedUser: "Customer Ana S.",
    reason: "Illegal request",
    jobTitle: "Document pickup assistance",
    submittedAt: "Yesterday, 6:40 PM",
    status: "Open",
  },
];

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
        {reports.map((report) => (
          <AdminReportCard
            key={report.id}
            reporter={report.reporter}
            reportedUser={report.reportedUser}
            reason={report.reason}
            jobTitle={report.jobTitle}
            submittedAt={report.submittedAt}
            status={report.status}
            onReview={() =>
              router.push({
                pathname: "/admin/report-review-detail",
                params: { reportId: report.id },
              })
            }
          />
        ))}
      </View>
    </ScrollScreen>
  );
}