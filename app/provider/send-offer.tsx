import { useLocalSearchParams, useRouter } from "expo-router";
import { View } from "react-native";

import { AuthHeader } from "@/components/auth/AuthHeader";
import { AuthNotice } from "@/components/auth/AuthNotice";
import { FormCard } from "@/components/auth/FormCard";
import { AppScrollView } from "@/components/common/AppScrollView";
import { Button } from "@/components/ui/Button";
import { TextArea } from "@/components/ui/TextArea";
import { TextField } from "@/components/ui/TextField";

export default function ProviderSendOfferScreen() {
  const router = useRouter();
  const { jobId } = useLocalSearchParams<{ jobId?: string }>();

  return (
    <AppScrollView>
      <AuthHeader
        eyebrow="Send offer"
        title="Make your offer clear."
        description="Tell the customer your price, estimated time, and what is included."
      />

      <View className="mt-8">
        <FormCard title="Offer details">
          <View className="gap-5">
            <TextField
              label="Offer price"
              placeholder="Example: ₱800"
              keyboardType="numeric"
            />

            <TextField
              label="Estimated time"
              placeholder="Example: 2 hours or tomorrow morning"
            />

            <TextArea
              label="Message to customer"
              placeholder="Explain what you can do, what is included, and anything the customer should prepare."
            />
          </View>
        </FormCard>
      </View>

      <View className="mt-5">
        <AuthNotice
          tone="warning"
          title="Send honest offers only."
          description="Do not offer illegal processing, fixer services, fake documents, or work outside your verified service."
        />
      </View>

      <View className="mt-8 gap-3 pb-2">
        <Button
          title="Submit offer"
          onPress={() =>
            router.replace({
              pathname: "/provider/offer-sent",
              params: { jobId: jobId ?? "faucet" },
            })
          }
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