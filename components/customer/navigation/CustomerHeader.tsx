import { usePathname, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type HeaderConfig = {
  title: string;
  showBack: boolean;
};

function getHeaderConfig(pathname: string): HeaderConfig {
  if (pathname.includes("/customer/post-job")) {
    return { title: "Post Job", showBack: true };
  }

  if (pathname.includes("/customer/job-posted")) {
    return { title: "Job Posted", showBack: false };
  }

  if (pathname.includes("/customer/offer-accepted")) {
    return { title: "Offer Accepted", showBack: false };
  }

  if (pathname.includes("/customer/job-status")) {
    return { title: "Job Status", showBack: true };
  }

  if (pathname.includes("/customer/rate-provider")) {
    return { title: "Rate Provider", showBack: true };
  }

  if (pathname.includes("/customer/jobs")) {
    return { title: "My Jobs", showBack: false };
  }

  if (pathname.includes("/customer/offers")) {
    return { title: "Offers", showBack: false };
  }

  if (pathname.includes("/customer/profile")) {
    return { title: "Profile", showBack: false };
  }

  return { title: "Home", showBack: false };
}

export function CustomerHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  const config = getHeaderConfig(pathname);
 
  return (
    <View
      className="border-b border-slate-200 bg-white px-5 pb-3"
      style={{ paddingTop: Math.max(insets.top, 12) }}
    >
      <View className="h-11 flex-row items-center justify-between">
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