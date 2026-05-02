import { Text, View } from "react-native";

import { FormCard } from "@/components/auth/FormCard";
import { AppScrollView } from "@/components/common/AppScrollView";
import { DetailRow } from "@/components/common/DetailRow";
import { Button } from "@/components/ui/Button";

export default function ProviderProfileScreen() {
  return (
    <AppScrollView>
      <Text className="text-base leading-6 text-slate-600">
        Manage your provider profile, service details, and verification status.
      </Text>

      <View className="mt-6">
        <FormCard title="Provider details">
          <DetailRow label="Name" value="Mark Dela Cruz" />
          <DetailRow label="Service" value="Plumbing" />
          <DetailRow label="Area" value="Dasmariñas, Cavite" />
          <DetailRow label="Status" value="Pending review" />
        </FormCard>
      </View>

      <View className="mt-5">
        <FormCard title="Account actions">
          <Button
            title="Sign out placeholder"
            variant="secondary"
            onPress={() => {}}
          />
        </FormCard>
      </View>
    </AppScrollView>
  );
}