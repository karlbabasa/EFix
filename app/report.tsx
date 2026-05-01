import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";

import { AuthHeader } from "@/components/auth/AuthHeader";
import { AuthNotice } from "@/components/auth/AuthNotice";
import { FormCard } from "@/components/auth/FormCard";
import { ScrollScreen } from "@/components/common/ScrollScreen";
import { Button } from "@/components/ui/Button";
import { TextArea } from "@/components/ui/TextArea";

const reportReasons = [
  "No show",
  "Scam or suspicious activity",
  "Harassment",
  "Unsafe behavior",
  "Payment issue",
  "Illegal request",
  "Other",
];

export default function ReportScreen() {
  const router = useRouter();
  const [selectedReason, setSelectedReason] = useState("");

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
        eyebrow="Report issue"
        title="Tell us what happened."
        description="Use this for unsafe behavior, scams, illegal requests, no-show issues, or payment concerns."
      />

      <View className="mt-8">
        <FormCard title="Reason">
          <View className="gap-3">
            {reportReasons.map((reason) => {
              const isSelected = selectedReason === reason;

              return (
                <Pressable
                  key={reason}
                  onPress={() => setSelectedReason(reason)}
                  className={`rounded-xl border px-4 py-3 active:opacity-80 ${
                    isSelected
                      ? "border-slate-950 bg-slate-950"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <Text
                    className={`text-sm font-semibold ${
                      isSelected ? "text-white" : "text-slate-700"
                    }`}
                  >
                    {reason}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </FormCard>
      </View>

      <View className="mt-5">
        <FormCard title="Details">
          <TextArea
            label="What happened?"
            placeholder="Briefly explain the issue. Add dates, names, job details, or payment notes if needed."
          />
        </FormCard>
      </View>

      <View className="mt-5">
        <AuthNotice
          tone="warning"
          title="Serious reports need review."
          description="Later, admins will review reports, check job details, and take action such as warnings, suspensions, or dispute handling."
        />
      </View>

      <View className="mt-8 gap-3 pb-2">
        <Button
          title="Submit report"
          onPress={() => router.replace("/report-submitted")}
        />
      </View>
    </ScrollScreen>
  );
}