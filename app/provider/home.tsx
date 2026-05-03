import Ionicons from "@expo/vector-icons/Ionicons";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, Text, View } from "react-native";

import { AppScrollView } from "@/components/common/AppScrollView";
import { DashboardActionTile } from "@/components/common/dashboard/DashboardActionTile";
import { DashboardHeader } from "@/components/common/dashboard/DashboardHeader";
import { DashboardInfoCard } from "@/components/common/dashboard/DashboardInfoCard";
import { DashboardSummaryCard } from "@/components/common/dashboard/DashboardSummaryCard";
import { supabase } from "@/lib/supabase";

type ProviderAction = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
  onPress: () => void;
};

type ProviderStatus =
  | "pending"
  | "approved"
  | "rejected"
  | "resubmission_required"
  | "suspended";

function getStatusContent(status: ProviderStatus | null) {
  if (status === "approved") {
    return {
      title: "Approved",
      description: "Your provider account is approved. You can now browse jobs and send offers.",
      tone: "default" as const,
      buttonTitle: "Browse open jobs",
    };
  }

  if (status === "rejected") {
    return {
      title: "Application rejected",
      description: "Your application was rejected. Check admin notes or contact support.",
      tone: "warning" as const,
      buttonTitle: "Review application",
    };
  }

  if (status === "resubmission_required") {
    return {
      title: "Resubmission required",
      description: "Admin needs updated information or documents before approval.",
      tone: "warning" as const,
      buttonTitle: "Update application",
    };
  }

  if (status === "suspended") {
    return {
      title: "Account suspended",
      description: "Your provider account is suspended and cannot accept jobs.",
      tone: "warning" as const,
      buttonTitle: "Contact support",
    };
  }

  return {
    title: "Pending approval",
    description: "Your provider account needs admin approval before you can accept real jobs.",
    tone: "warning" as const,
    buttonTitle: "Check application",
  };
}

export default function ProviderHomeScreen() {
  const router = useRouter();
  const [providerStatus, setProviderStatus] = useState<ProviderStatus | null>(null);

  useFocusEffect(
    useCallback(() => {
      async function loadProviderStatus() {
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError || !user) {
          return;
        }

        const { data, error } = await supabase
          .from("provider_profiles")
          .select("status")
          .eq("user_id", user.id)
          .single();

        if (error) {
          return;
        }

        setProviderStatus(data.status);
      }

      loadProviderStatus();
    }, [])
  );

  const statusContent = getStatusContent(providerStatus);

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
      onPress: () => Alert.alert("Coming soon", "Availability settings will be added later."),
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
        <DashboardHeader label="Provider" title="Work dashboard" avatarLabel="P" />

        <DashboardSummaryCard
          label="Account status"
          title={statusContent.title}
          description={statusContent.description}
          buttonTitle={statusContent.buttonTitle}
          tone={statusContent.tone}
          onPress={() => {
            if (providerStatus === "approved") {
              router.push("/provider/open-jobs");
              return;
            }

            router.push("/auth/provider-documents");
          }}
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
            description={
              providerStatus === "approved"
                ? "You can browse open jobs and send offers."
                : "Sample job only. Real job access will be locked until approval."
            }
            buttonTitle="Browse open jobs"
            onPress={() => router.push("/provider/open-jobs")}
          />
        </View>
      </View>
    </AppScrollView>
  );
}