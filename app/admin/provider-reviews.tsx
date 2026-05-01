import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { demoProviderApplications } from "@/data";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { ScrollScreen } from "@/components/common/ScrollScreen";
import { AdminReviewCard } from "@/components/admin/reviews/AdminReviewCard";

function formatStatus(status: string) {
  return status.replace("_", " ");
}

export default function AdminProviderReviewsScreen() {
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
        eyebrow="Provider reviews"
        title="Pending applications."
        description="Review provider profiles and submitted legal documents before approval."
      />

      <View className="mt-8 gap-3">
        {demoProviderApplications.map((application) => (
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
        ))}
      </View>
    </ScrollScreen>
  );
}