import { usePathname, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type HeaderConfig = {
  title: string;
  showBack: boolean;
};

function getHeaderConfig(pathname: string): HeaderConfig {
  if (pathname.includes("/provider/open-jobs")) {
    return { title: "Open Jobs", showBack: false };
  }

  if (pathname.includes("/provider/job-details")) {
    return { title: "Job Details", showBack: true };
  }

  if (pathname.includes("/provider/send-offer")) {
    return { title: "Send Offer", showBack: true };
  }

  if (pathname.includes("/provider/offer-sent")) {
    return { title: "Offer Sent", showBack: false };
  }

  if (pathname.includes("/provider/offers")) {
    return { title: "Offers", showBack: false };
  }

  if (pathname.includes("/provider/profile")) {
    return { title: "Profile", showBack: false };
  }

  return { title: "Provider", showBack: false };
}

export function ProviderHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  const config = getHeaderConfig(pathname);

  return (
    <View
      className="border-b border-slate-200 bg-white px-5"
      style={{ paddingTop: insets.top }}
    >
      <View className="h-12 flex-row items-center justify-between">
        <View className="w-20">
          {config.showBack ? (
            <Pressable
              className="self-start rounded-full px-1 py-2 active:opacity-70"
              onPress={() => router.back()}
            >
              <Text className="text-sm font-semibold text-slate-700">
                ← Back
              </Text>
            </Pressable>
          ) : null}
        </View>

        <Text className="flex-1 text-center text-base font-extrabold text-slate-950">
          {config.title}
        </Text>

        <View className="w-20" />
      </View>
    </View>
  );
}