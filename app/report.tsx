import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";

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
    <ScrollScreen>
      <Text className="text-sm font-semibold text-slate-500">
        Report issue
      </Text>

      <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
        Tell us what happened.
      </Text>

      <Text className="mt-3 text-base leading-6 text-slate-600">
        Use this for unsafe behavior, scams, illegal requests, no-show issues,
        or payment concerns.
      </Text>

      <View className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
        <Text className="text-base font-semibold text-slate-950">
          Reason
        </Text>

        <View className="mt-4 gap-3">
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
                  className={`text-sm font-medium ${
                    isSelected ? "text-white" : "text-slate-700"
                  }`}
                >
                  {reason}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <View className="mt-5">
        <TextArea
          label="Details"
          placeholder="Briefly explain what happened. Add dates, names, job details, or payment notes if needed."
        />
      </View>

      <View className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4">
        <Text className="text-sm font-semibold text-amber-900">
          Serious reports need review.
        </Text>

        <Text className="mt-2 text-sm leading-5 text-amber-900">
          Later, admins will review reports, check job details, and take action
          such as warnings, suspensions, or dispute handling.
        </Text>
      </View>

      <View className="mt-8 gap-3 pb-2">
        <Button
          title="Submit report"
          onPress={() => router.replace("/report-submitted")}
        />

        <Button
          title="Back"
          variant="secondary"
          onPress={() => router.back()}
        />
      </View>
    </ScrollScreen>
  );
}