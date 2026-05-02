import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { demoOffers } from "@/data";
import { OfferCard } from "@/components/customer/jobs/OfferCard";
import { EmptyState } from "@/components/common/EmptyState";
import { ScrollScreen } from "@/components/common/ScrollScreen";
import { Button } from "@/components/ui/Button";
import { CustomerBottomNav } from "@/components/customer/navigation/CustomerBottomNav";

export default function CustomerOffersScreen() {
  const router = useRouter();

  return (
    <ScrollScreen className="bg-slate-50" contentClassName="pb-32">
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
        {demoOffers.length > 0 ? (
          demoOffers.map((offer) => (
            <OfferCard
              key={offer.id}
              providerName={offer.providerName}
              service={offer.service}
              rating={offer.rating}
              price={offer.price}
              message={offer.message}
              time={offer.time}
              onAccept={() => router.replace("/customer/offer-accepted")}
            />
          ))
        ) : (
          <EmptyState
            title="No offers yet"
            description="Providers have not sent offers for this job yet. Check again later."
            actionTitle="Back to home"
            onAction={() => router.replace("/customer/home")}
          />
        )}
      </View>

      <View className="mt-8 gap-3">
        <Button
          title="Back"
          variant="secondary"
          onPress={() => router.back()}
        />
      </View>
    </ScrollScreen>
  );
}