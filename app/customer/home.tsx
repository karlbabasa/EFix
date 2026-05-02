import { useRouter } from "expo-router";

import { Screen } from "@/components/common/Screen";
import { CustomerHomeDashboard } from "@/components/common/dashboard/CustomerHomeDashboard";
import { CustomerBottomNav } from "@/components/customer/navigation/CustomerBottomNav";

export default function CustomerHomeScreen() {
  const router = useRouter();

  return (
    <Screen className="bg-slate-50" contentClassName="pb-28">
      <CustomerHomeDashboard
        appName="E-Fix"
        greeting="Hello, Karl"
        avatarLabel="K"
        onPostJob={() => router.push("/customer/post-job")}
        actions={[
          {
            icon: "＋",
            title: "Post job",
            description: "Create a request",
            onPress: () => router.push("/customer/post-job"),
          },
          {
            icon: "⌕",
            title: "Find provider",
            description: "Browse services",
            onPress: () => {},
          },
          {
            icon: "₱",
            title: "Offers",
            description: "Compare prices",
            onPress: () => router.push("/customer/offers"),
          },
          {
            icon: "!",
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
    </Screen>
  );
}