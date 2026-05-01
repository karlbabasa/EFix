import { Text, View } from "react-native";

import { Button } from "@/components/ui/Button";

type OfferCardProps = {
  providerName: string;
  service: string;
  rating: string;
  price: string;
  message: string;
  time: string;
  onAccept: () => void;
};

export function OfferCard({
  providerName,
  service,
  rating,
  price,
  message,
  time,
  onAccept,
}: OfferCardProps) {
  return (
    <View className="rounded-2xl border border-slate-200 bg-white p-5">
      <View className="flex-row items-start justify-between gap-4">
        <View className="flex-1">
          <Text className="text-base font-bold text-slate-950">
            {providerName}
          </Text>

          <Text className="mt-1 text-sm text-slate-500">
            {service} • {rating} rating
          </Text>
        </View>

        <View className="rounded-full bg-emerald-50 px-3 py-1">
          <Text className="text-sm font-bold text-emerald-700">
            {price}
          </Text>
        </View>
      </View>

      <Text className="mt-4 text-sm leading-5 text-slate-600">
        {message}
      </Text>

      <View className="mt-4 rounded-xl bg-slate-50 p-3">
        <Text className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Available
        </Text>

        <Text className="mt-1 text-sm font-semibold text-slate-700">
          {time}
        </Text>
      </View>

      <View className="mt-4">
        <Button title="Accept offer" onPress={onAccept} />
      </View>
    </View>
  );
}