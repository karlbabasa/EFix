import { useRouter } from "expo-router";
import { View } from "react-native";

import { AuthHeader } from "@/components/auth/AuthHeader";
import { AuthNotice } from "@/components/auth/AuthNotice";
import { FormCard } from "@/components/auth/FormCard";
import { AppScrollView } from "@/components/common/AppScrollView";
import { CustomerBottomNav } from "@/components/customer/navigation/CustomerBottomNav";
import { Button } from "@/components/ui/Button";
import { TextArea } from "@/components/ui/TextArea";
import { TextField } from "@/components/ui/TextField";

export default function PostJobScreen() {
  const router = useRouter();

  return (
    <AppScrollView className="bg-slate-50" contentClassName="pb-32">
      <AuthHeader
        eyebrow="Post a job"
        title="Tell providers what you need."
        description="Add enough details so providers can send accurate offers."
      />

      <View className="mt-8">
        <FormCard title="Job details">
          <View className="gap-5">
            <TextField
              label="Job title"
              placeholder="Example: Fix leaking faucet"
              autoCapitalize="sentences"
            />

            <TextField
              label="Category"
              placeholder="Plumbing, cleaning, errands, documents"
              autoCapitalize="words"
            />

            <TextArea
              label="Description"
              placeholder="Describe the problem or task. Include important details."
            />
          </View>
        </FormCard>
      </View>

      <View className="mt-5">
        <FormCard title="Schedule and budget">
          <View className="gap-5">
            <TextField
              label="Location"
              placeholder="Example: Dasmariñas, Cavite"
              autoCapitalize="words"
            />

            <TextField
              label="Preferred date and time"
              placeholder="Example: Tomorrow afternoon"
            />

            <TextField
              label="Budget"
              placeholder="Example: ₱500 - ₱1,000"
              keyboardType="default"
            />
          </View>
        </FormCard>
      </View>

      <View className="mt-5">
        <AuthNotice
          tone="warning"
          title="Keep it legal and safe."
          description="Do not post fake documents, fixer services, bribery, dangerous tasks, or anything that bypasses legal processes."
        />
      </View>

      <View className="mt-8 gap-3">
        <Button
          title="Post job"
          onPress={() => router.replace("/customer/job-posted")}
        />

        <Button
          title="Back"
          variant="secondary"
          onPress={() => router.back()}
        />
      </View>
    </AppScrollView>
  );
}