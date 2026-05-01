import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { OfferCard } from "@/components/customer/jobs/OfferCard";
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
    <ScrollScreen className="bg-slate-50">
      <Text className="text-sm font-semibold text-slate-500">
        Offers received
      </Text>

      <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
        Compare provider offers.
      </Text>

      <Text className="mt-3 text-base leading-6 text-slate-600">
        Review price, schedule, rating, and message before choosing a provider.
      </Text>

      <View className="mt-8 gap-3">
        {offers.map((offer) => (
          <OfferCard
            key={offer.providerName}
            providerName={offer.providerName}
            service={offer.service}
            rating={offer.rating}
            price={offer.price}
            message={offer.message}
            time={offer.time}
            onAccept={() => router.replace("/customer/offer-accepted")}
          />
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