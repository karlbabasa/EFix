import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { Screen } from "@/components/common/Screen";
import { DashboardActionTile } from "@/components/common/dashboard/DashboardActionTile";
import { DashboardHeader } from "@/components/common/dashboard/DashboardHeader";
import { DashboardInfoCard } from "@/components/common/dashboard/DashboardInfoCard";
import { DashboardSummaryCard } from "@/components/common/dashboard/DashboardSummaryCard";

export default function CustomerHomeScreen() {
  const router = useRouter();

  return (
    <Screen className="bg-slate-50">
      <View className="flex-1">
        <DashboardHeader
          label="E-Fix"
          title="Hello, Karl"
          avatarLabel="K"
        />

        <DashboardSummaryCard
          label="Main action"
          title="What do you need done?"
          description="Post a job and let nearby providers send offers."
          buttonTitle="Post a job"
          onPress={() => router.push("/customer/post-job")}
        />

        <View className="mt-7">
          <Text className="text-base font-extrabold text-slate-950">
            Quick actions
          </Text>

          <View className="mt-4 flex-row flex-wrap gap-3">
            <DashboardActionTile
              icon="＋"
              title="Post job"
              description="Create a request"
              onPress={() => router.push("/customer/post-job")}
            />

            <DashboardActionTile
              icon="⌕"
              title="Find provider"
              description="Browse services"
              onPress={() => {}}
            />

            <DashboardActionTile
              icon="₱"
              title="Offers"
              description="Compare prices"
              onPress={() => router.push("/customer/offers")}
            />

            <DashboardActionTile
              icon="!"
              title="Report"
              description="Safety help"
              onPress={() => router.push("/report")}
            />
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
            title="Fix leaking faucet"
            subtitle="Waiting for provider offers"
            badgeLabel="Open"
            badgeTone="warning"
            buttonTitle="View offers"
            onPress={() => router.push("/customer/offers")}
          />
        </View>
      </View>
    </Screen>
  );
}