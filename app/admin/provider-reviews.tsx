import { useState } from "react";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { demoProviderApplications } from "@/data";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { AdminReviewCard } from "@/components/admin/reviews/AdminReviewCard";
import { EmptyState } from "@/components/common/EmptyState";
import { ScrollScreen } from "@/components/common/ScrollScreen";
import { SearchBar } from "@/components/common/SearchBar";

function formatStatus(status: string) {
  return status.replace("_", " ");
}

export default function AdminProviderReviewsScreen() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const filteredApplications = demoProviderApplications.filter((application) => {
    const query = search.toLowerCase();

    return (
      application.name.toLowerCase().includes(query) ||
      application.service.toLowerCase().includes(query) ||
      application.location.toLowerCase().includes(query) ||
      application.status.toLowerCase().includes(query)
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
        eyebrow="Provider reviews"
        title="Pending applications."
        description="Review provider profiles and submitted legal documents before approval."
      />

      <View className="mt-6">
        <SearchBar
          value={search}
          placeholder="Search by name, service, or location"
          onChangeText={setSearch}
        />
      </View>

      <View className="mt-6 gap-3">
        {filteredApplications.length > 0 ? (
          filteredApplications.map((application) => (
            <AdminReviewCard
              key={application.id}
              name={application.name}
              service={application.service}
              location={application.location}
              submittedAt={application.submittedAt}
              status={formatStatus(application.status)}
              onReview={() =>
                router.push({
                  pathname: "/admin/provider-review-detail",
                  params: { providerId: application.id },
                })
              }
            />
          ))
        ) : (
          <EmptyState
            title="No matching applications"
            description="Try a different provider name, service, location, or status."
          />
        )}
      </View>
    </ScrollScreen>
  );
}