import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { AppScrollView } from "@/components/common/AppScrollView";
import { DashboardActionTile } from "@/components/common/dashboard/DashboardActionTile";
import { DashboardHeader } from "@/components/common/dashboard/DashboardHeader";
import { DashboardInfoCard } from "@/components/common/dashboard/DashboardInfoCard";
import { DashboardSummaryCard } from "@/components/common/dashboard/DashboardSummaryCard";

type ProviderAction = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
  onPress: () => void;
};

export default function ProviderHomeScreen() {
  const router = useRouter();

  const providerActions: ProviderAction[] = [
    {
      icon: "briefcase-outline",
      title: "Open jobs",
      description: "Browse requests",
      onPress: () => router.push("/provider/open-jobs"),
    },
    {
      icon: "send-outline",
      title: "Offers",
      description: "Sent offers",
      onPress: () => router.push("/provider/offers"),
    },
    {
      icon: "time-outline",
      title: "Availability",
      description: "Set schedule",
      onPress: () => { },
    },
    {
      icon: "warning-outline",
      title: "Report",
      description: "Safety help",
      onPress: () => router.push("/report"),
    },
  ];

  return (
    <AppScrollView>
      <View className="flex-1">
        <DashboardHeader
          label="Provider"
          title="Work dashboard"
          avatarLabel="P"
        />

        <DashboardSummaryCard
          label="Account status"
          title="Pending approval"
          description="Your provider account needs admin approval before you can accept real jobs."
          buttonTitle="Check application"
          tone="warning"
          onPress={() => { }}
        />

        <View className="mt-7">
          <Text className="text-base font-extrabold text-slate-950">
            Quick actions
          </Text>

          <View className="mt-4 flex-row flex-wrap gap-3">
            {providerActions.map((action) => (
              <DashboardActionTile
                key={action.title}
                icon={action.icon}
                title={action.title}
                description={action.description}
                onPress={action.onPress}
              />
            ))}
          </View>
        </View>

        <View className="mt-7">
          <View className="flex-row items-center justify-between">
            <Text className="text-base font-extrabold text-slate-950">
              Nearby sample job
            </Text>

            <Text className="text-sm font-semibold text-slate-500">
              Preview
            </Text>
          </View>

          <DashboardInfoCard
            title="Fix leaking faucet"
            subtitle="Plumbing • Dasmariñas, Cavite"
            badgeLabel="₱500+"
            badgeTone="success"
            description="Sample job only. Real job access will be locked until approval."
            buttonTitle="Browse open jobs"
            onPress={() => router.push("/provider/open-jobs")}
          />
        </View>
      </View>
    </AppScrollView>
  );
}