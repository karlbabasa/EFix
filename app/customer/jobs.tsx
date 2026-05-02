import { useState } from "react";
import { useRouter } from "expo-router";
import { View } from "react-native";

import { demoJobs } from "@/data";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { EmptyState } from "@/components/common/EmptyState";
import { ScrollScreen } from "@/components/common/ScrollScreen";
import { SearchBar } from "@/components/common/SearchBar";
import { CustomerJobCard } from "@/components/customer/jobs/CustomerJobCard";
import { CustomerBottomNav } from "@/components/customer/navigation/CustomerBottomNav";

function formatStatus(status: string) {
  return status.replace("_", " ");
}

export default function CustomerJobsScreen() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const filteredJobs = demoJobs.filter((job) => {
    const query = search.toLowerCase();

    return (
      job.title.toLowerCase().includes(query) ||
      job.category.toLowerCase().includes(query) ||
      job.location.toLowerCase().includes(query) ||
      job.status.toLowerCase().includes(query)
    );
  });

  return (
    <ScrollScreen className="bg-slate-50" contentClassName="pb-32">
      <AuthHeader
        eyebrow="My jobs"
        title="Track your requests."
        description="View your posted jobs, offers, and current job status."
      />

      <View className="mt-6">
        <SearchBar
          value={search}
          placeholder="Search by job, service, location, or status"
          onChangeText={setSearch}
        />
      </View>

      <View className="mt-6 gap-3">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <CustomerJobCard
              key={job.id}
              title={job.title}
              category={job.category}
              location={job.location}
              schedule={job.schedule}
              budget={job.budget}
              status={formatStatus(job.status)}
              onViewStatus={() => router.push("/customer/job-status")}
              onViewOffers={() => router.push("/customer/offers")}
            />
          ))
        ) : (
          <EmptyState
            title="No matching jobs"
            description="Try searching for another job title, service, location, or status."
            actionTitle="Post a job"
            onAction={() => router.push("/customer/post-job")}
          />
        )}
      </View>
    </ScrollScreen>
  );
}