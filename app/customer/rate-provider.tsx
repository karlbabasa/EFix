import { useState } from "react";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { AuthNotice } from "@/components/auth/AuthNotice";
import { FormCard } from "@/components/auth/FormCard";
import { ScrollScreen } from "@/components/common/ScrollScreen";
import { StarRating } from "@/components/customer/jobs/StarRating";
import { Button } from "@/components/ui/Button";
import { TextArea } from "@/components/ui/TextArea";

export default function RateProviderScreen() {
  const router = useRouter();
  const [rating, setRating] = useState(0);

  return (
    <ScrollScreen className="bg-slate-50">
      <Text className="text-sm font-semibold text-slate-500">
        Job completed
      </Text>

      <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
        Rate the provider.
      </Text>

      <Text className="mt-3 text-base leading-6 text-slate-600">
        Your feedback helps keep provider quality visible for future customers.
      </Text>

      <View className="mt-8">
        <FormCard title="Service rating">
          <StarRating rating={rating} onChange={setRating} />
        </FormCard>
      </View>

      <View className="mt-5">
        <FormCard title="Review">
          <TextArea
            label="Comment"
            placeholder="Example: Arrived on time and fixed the issue properly."
          />
        </FormCard>
      </View>

      <View className="mt-5">
        <AuthNotice
          title="Rate fairly."
          description="Use the report flow for serious issues, scams, unsafe behavior, or payment disputes."
        />
      </View>

      <View className="mt-8 gap-3 pb-2">
        <Button
          title="Submit rating"
          onPress={() => router.replace("/customer/home")}
        />

        <Button
          title="Skip for now"
          variant="secondary"
          onPress={() => router.replace("/customer/home")}
        />
      </View>
    </ScrollScreen>
  );
}