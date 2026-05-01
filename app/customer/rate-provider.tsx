import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";

import { ScrollScreen } from "@/components/common/ScrollScreen";
import { Button } from "@/components/ui/Button";
import { TextArea } from "@/components/ui/TextArea";

export default function RateProviderScreen() {
  const router = useRouter();
  const [rating, setRating] = useState(0);

  return (
    <ScrollScreen>
      <Text className="text-sm font-semibold text-slate-500">
        Job completed
      </Text>

      <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
        How was the service?
      </Text>

      <Text className="mt-3 text-base leading-6 text-slate-600">
        Your rating helps other customers choose reliable providers.
      </Text>

      <View className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
        <Text className="text-base font-semibold text-slate-950">
          Rate the provider
        </Text>

        <View className="mt-5 flex-row gap-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <Pressable
              key={star}
              onPress={() => setRating(star)}
              className="active:opacity-70"
            >
              <Text className="text-4xl">
                {star <= rating ? "★" : "☆"}
              </Text>
            </Pressable>
          ))}
        </View>

        <Text className="mt-3 text-sm text-slate-500">
          {rating > 0 ? `${rating} out of 5` : "Tap a star to rate"}
        </Text>
      </View>

      <View className="mt-5">
        <TextArea
          label="Review"
          placeholder="Write a short review. Example: Arrived on time and fixed the issue properly."
        />
      </View>

      <View className="mt-8 rounded-2xl border border-slate-200 bg-white p-4">
        <Text className="text-sm font-semibold text-slate-950">
          Fair rating only
        </Text>

        <Text className="mt-2 text-sm leading-5 text-slate-500">
          Rate based on the completed job. Reports and disputes will have a separate flow later.
        </Text>
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