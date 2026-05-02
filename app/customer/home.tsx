import { useRouter } from "expo-router";

import { AppScrollView } from "@/components/common/AppScrollView";
import { CustomerHomeDashboard } from "@/components/common/dashboard/CustomerHomeDashboard";
import { CustomerBottomNav } from "@/components/customer/navigation/CustomerBottomNav";

export default function CustomerHomeScreen() {
  const router = useRouter();

  return (
    <AppScrollView className="bg-slate-50" contentClassName="pb-28">
      <CustomerHomeDashboard
        appName="E-Fix"
        greeting="Hello, Karl"
        avatarLabel="K"
        onPostJob={() => router.push("/customer/post-job")}
        actions={[
          {
            icon: "add-circle-outline",
            title: "Post job",
            description: "Create a request",
            onPress: () => router.push("/customer/post-job"),
          },
          {
            icon: "search-outline",
            title: "Find provider",
            description: "Browse services",
            onPress: () => { },
          },
          {
            icon: "pricetag-outline",
            title: "Offers",
            description: "Compare prices",
            onPress: () => router.push("/customer/offers"),
          },
          {
            icon: "warning-outline",
            title: "Report",
            description: "Safety help",
            onPress: () => router.push("/report"),
          },
        ]}
        recentRequest={{
          title: "Fix leaking faucet",
          subtitle: "Waiting for provider offers",
          status: "Open",
          onPress: () => router.push("/customer/offers"),
        }}
      />
    </AppScrollView>
  );
}