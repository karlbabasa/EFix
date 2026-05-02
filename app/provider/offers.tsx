import { Text, View } from "react-native";

import { EmptyState } from "@/components/common/EmptyState";
import { AppScrollView } from "@/components/common/AppScrollView";

export default function ProviderOffersScreen() {
  return (
    <AppScrollView>
      <Text className="text-base leading-6 text-slate-600">
        View offers you sent to customers. This is a placeholder for now.
      </Text>

      <View className="mt-6">
        <EmptyState
          title="No sent offers yet"
          description="Offers you submit for customer jobs will appear here."
        />
      </View>
    </AppScrollView>
  );
}