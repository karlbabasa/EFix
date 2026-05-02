import { useState } from "react";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { demoJobs } from "@/data";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { EmptyState } from "@/components/common/EmptyState";
import { AppScrollView } from "@/components/common/AppScrollView";
import { SearchBar } from "@/components/common/SearchBar";
import { ProviderJobCard } from "@/components/provider/jobs/ProviderJobCard";

export default function ProviderOpenJobsScreen() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const filteredJobs = demoJobs.filter((job) => {
    const query = search.toLowerCase();

    return (
      job.title.toLowerCase().includes(query) ||
      job.category.toLowerCase().includes(query) ||
      job.location.toLowerCase().includes(query)
    );
  });

  return (
    <AppScrollView>
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

      <View className="mt-6">
        <SearchBar
          value={search}
          placeholder="Search by job, service, or location"
          onChangeText={setSearch}
        />
      </View>

      <View className="mt-6 gap-3">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
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
            title="No matching jobs"
            description="Try a different service, location, or job title."
          />
        )}
      </View>
    </AppScrollView>
  );
}