import { useState } from "react";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { demoReports } from "@/data";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { AdminReportCard } from "@/components/admin/reviews/AdminReportCard";
import { EmptyState } from "@/components/common/EmptyState";
import { ScrollScreen } from "@/components/common/ScrollScreen";
import { SearchBar } from "@/components/common/SearchBar";

function formatStatus(status: string) {
  return status.replace("_", " ");
}

export default function AdminReportReviewsScreen() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const filteredReports = demoReports.filter((report) => {
    const query = search.toLowerCase();

    return (
      report.reason.toLowerCase().includes(query) ||
      report.jobTitle.toLowerCase().includes(query) ||
      report.reporter.toLowerCase().includes(query) ||
      report.reportedUser.toLowerCase().includes(query) ||
      report.status.toLowerCase().includes(query)
    );
  });

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

      <View className="mt-6">
        <SearchBar
          value={search}
          placeholder="Search by reason, job, user, or status"
          onChangeText={setSearch}
        />
      </View>

      <View className="mt-6 gap-3">
        {filteredReports.length > 0 ? (
          filteredReports.map((report) => (
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
            title="No matching reports"
            description="Try a different reason, job title, user, or status."
          />
        )}
      </View>
    </ScrollScreen>
  );
}