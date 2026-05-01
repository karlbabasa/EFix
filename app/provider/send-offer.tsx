import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View } from "react-native";

import { ScrollScreen } from "@/components/common/ScrollScreen";
import { Button } from "@/components/ui/Button";
import { TextArea } from "@/components/ui/TextArea";
import { TextField } from "@/components/ui/TextField";

export default function ProviderSendOfferScreen() {
  const router = useRouter();
  const { jobId } = useLocalSearchParams<{ jobId?: string }>();

  return (
    <ScrollScreen>
      <Text className="text-sm font-semibold text-slate-500">
        Send offer
      </Text>

      <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
        Make your offer clear.
      </Text>

      <Text className="mt-3 text-base leading-6 text-slate-600">
        Tell the customer your price, estimated time, and what is included.
      </Text>

      <View className="mt-8 gap-5">
        <TextField
          label="Offer price"
          placeholder="Example: ₱800"
          keyboardType="numeric"
        />

        <TextField
          label="Estimated time"
          placeholder="Example: 2 hours or Tomorrow morning"
        />

        <TextArea
          label="Message to customer"
          placeholder="Explain what you can do, what is included, and anything the customer should prepare."
        />
      </View>

      <View className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-4">
        <Text className="text-sm font-semibold text-amber-900">
          Send honest offers only.
        </Text>

        <Text className="mt-2 text-sm leading-5 text-amber-900">
          Do not offer illegal processing, fixer services, fake documents, or work outside your verified service.
        </Text>
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
    </ScrollScreen>
  );
}