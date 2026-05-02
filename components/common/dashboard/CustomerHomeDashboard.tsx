import { Text, View } from "react-native";

import { DashboardActionTile } from "@/components/common/dashboard/DashboardActionTile";
import { DashboardHeader } from "@/components/common/dashboard/DashboardHeader";
import { DashboardInfoCard } from "@/components/common/dashboard/DashboardInfoCard";
import { DashboardSummaryCard } from "@/components/common/dashboard/DashboardSummaryCard";

import Ionicons from "@expo/vector-icons/Ionicons";

type DashboardAction = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
  onPress: () => void;
};

type RecentRequest = {
  title: string;
  subtitle: string;
  status: string;
  onPress: () => void;
};

type CustomerHomeDashboardProps = {
  appName: string;
  greeting: string;
  avatarLabel: string;
  onPostJob: () => void;
  actions: DashboardAction[];
  recentRequest: RecentRequest;
};

export function CustomerHomeDashboard({
  appName,
  greeting,
  avatarLabel,
  onPostJob,
  actions,
  recentRequest,
}: CustomerHomeDashboardProps) {
  return (
    <View className="flex-1">
      <DashboardHeader
        label={appName}
        title={greeting}
        avatarLabel={avatarLabel}
      />

      <DashboardSummaryCard
        label="Main action"
        title="What do you need done?"
        description="Post a job and let nearby providers send offers."
        buttonTitle="Post a job"
        onPress={onPostJob}
      />

      <View className="mt-7">
        <Text className="text-base font-extrabold text-slate-950">
          Quick actions
        </Text>

        <View className="mt-4 flex-row flex-wrap gap-3">
          {actions.map((action) => (
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
            Recent request
          </Text>

          <Text className="text-sm font-semibold text-slate-500">
            See all
          </Text>
        </View>

        <DashboardInfoCard
          title={recentRequest.title}
          subtitle={recentRequest.subtitle}
          badgeLabel={recentRequest.status}
          badgeTone="warning"
          buttonTitle="View offers"
          onPress={recentRequest.onPress}
        />
      </View>
    </View>
  );
}