import { useLocalSearchParams, useRouter } from "expo-router";
import { Alert, Pressable, Text, View } from "react-native";

import { demoProviderApplications } from "@/data";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { AuthNotice } from "@/components/auth/AuthNotice";
import { FormCard } from "@/components/auth/FormCard";
import { ScrollScreen } from "@/components/common/ScrollScreen";
import { Button } from "@/components/ui/Button";

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <View className="flex-row justify-between gap-4 border-b border-slate-100 py-3 last:border-b-0">
      <Text className="text-sm font-semibold text-slate-500">
        {label}
      </Text>

      <Text className="flex-1 text-right text-sm font-semibold text-slate-800">
        {value}
      </Text>
    </View>
  );
}

export default function AdminProviderReviewDetailScreen() {
  const router = useRouter();
  const { providerId } = useLocalSearchParams<{ providerId?: string }>();

  const provider =
    demoProviderApplications.find((item) => item.id === providerId) ??
    demoProviderApplications[0];

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
        eyebrow="Provider application"
        title={provider.name}
        description="Review the provider profile and submitted documents before making a decision."
      />

      <View className="mt-8">
        <FormCard title="Profile details">
          <DetailRow label="Service" value={provider.service} />
          <DetailRow label="Location" value={provider.location} />
          <DetailRow label="Mobile" value={provider.mobile} />
          <DetailRow label="Email" value={provider.email} />
          <DetailRow label="Experience" value={provider.experience} />
        </FormCard>
      </View>

      <View className="mt-5">
        <FormCard title="Service description">
          <Text className="text-sm leading-6 text-slate-600">
            {provider.description}
          </Text>
        </FormCard>
      </View>

      <View className="mt-5">
        <FormCard title="Submitted documents">
          <View className="gap-3">
            {provider.documents.map((document) => (
              <View
                key={document}
                className="flex-row items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
              >
                <Text className="text-sm font-semibold text-slate-700">
                  {document}
                </Text>

                <Text className="text-xs font-semibold text-emerald-700">
                  Uploaded
                </Text>
              </View>
            ))}
          </View>
        </FormCard>
      </View>

      <View className="mt-5">
        <AuthNotice
          tone="warning"
          title="Manual review required."
          description="This is a placeholder. Later, admin should open each document, verify identity, and record the reason for approval or rejection."
        />
      </View>

      <View className="mt-8 gap-3 pb-2">
        <Button
          title="Approve provider"
          onPress={() => Alert.alert("Approved placeholder")}
        />

        <Button
          title="Ask to resubmit"
          variant="secondary"
          onPress={() => Alert.alert("Resubmit placeholder")}
        />

        <Button
          title="Reject application"
          variant="danger"
          onPress={() => Alert.alert("Rejected placeholder")}
        />
      </View>
    </ScrollScreen>
  );
}