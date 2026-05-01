import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { ScrollScreen } from "@/components/common/ScrollScreen";
import { Button } from "@/components/ui/Button";

const offers = [
  {
    providerName: "Mark D.",
    service: "Plumbing",
    price: "₱800",
    time: "Tomorrow afternoon",
    message: "I can check the leak and replace small parts if needed.",
    rating: "4.8",
  },
  {
    providerName: "Jun R.",
    service: "Home repair",
    price: "₱950",
    time: "Tomorrow morning",
    message: "I can inspect the faucet and bring basic tools.",
    rating: "4.6",
  },
];

export default function CustomerOffersScreen() {
  const router = useRouter();

  return (
    <ScrollScreen>
      <Text className="text-sm font-semibold text-slate-500">
        Offers received
      </Text>

      <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
        Choose a provider.
      </Text>

      <Text className="mt-3 text-base leading-6 text-slate-600">
        Compare the price, schedule, and message before accepting an offer.
      </Text>

      <View className="mt-8 gap-3">
        {offers.map((offer) => (
          <View
            key={offer.providerName}
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >
            <View className="flex-row items-start justify-between gap-4">
              <View className="flex-1">
                <Text className="text-base font-semibold text-slate-950">
                  {offer.providerName}
                </Text>

                <Text className="mt-1 text-sm text-slate-500">
                  {offer.service} • ⭐ {offer.rating}
                </Text>
              </View>

              <Text className="text-base font-extrabold text-slate-950">
                {offer.price}
              </Text>
            </View>

            <Text className="mt-4 text-sm leading-5 text-slate-600">
              {offer.message}
            </Text>

            <Text className="mt-3 text-sm font-medium text-slate-500">
              Available: {offer.time}
            </Text>

            <View className="mt-4">
              <Button
                title="Accept offer"
                onPress={() => router.replace("/customer/offer-accepted")}
              />
            </View>
          </View>
        ))}
      </View>

      <View className="mt-8 gap-3 pb-2">
        <Button
          title="Back"
          variant="secondary"
          onPress={() => router.back()}
        />
      </View>
    </ScrollScreen>
  );
}