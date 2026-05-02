import Ionicons from "@expo/vector-icons/Ionicons";
import { usePathname, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ProviderTab = "home" | "jobs" | "offers" | "profile";

type NavItemProps = {
  icon: keyof typeof Ionicons.glyphMap;
  activeIcon: keyof typeof Ionicons.glyphMap;
  label: string;
  active?: boolean;
  onPress: () => void;
};

function NavItem({
  icon,
  activeIcon,
  label,
  active = false,
  onPress,
}: NavItemProps) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-1 items-center justify-center py-2 active:opacity-70"
    >
      <Ionicons
        name={active ? activeIcon : icon}
        size={22}
        color={active ? "#020617" : "#94A3B8"}
      />

      <Text
        className={`mt-1 text-[11px] font-semibold ${
          active ? "text-slate-950" : "text-slate-400"
        }`}
      >
        {label}
      </Text>
    </Pressable>
  );
}

function getActiveTab(pathname: string): ProviderTab {
  if (
    pathname.includes("/provider/open-jobs") ||
    pathname.includes("/provider/job-details")
  ) {
    return "jobs";
  }

  if (
    pathname.includes("/provider/offers") ||
    pathname.includes("/provider/send-offer") ||
    pathname.includes("/provider/offer-sent")
  ) {
    return "offers";
  }

  if (pathname.includes("/provider/profile")) {
    return "profile";
  }

  return "home";
}

export function ProviderBottomNav() {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  const activeTab = getActiveTab(pathname);

  return (
    <View
      className="absolute bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white px-4 pt-2"
      style={{
        paddingBottom: Math.max(insets.bottom, 10),
      }}
    >
      <View className="flex-row items-center justify-between">
        <NavItem
          icon="home-outline"
          activeIcon="home"
          label="Home"
          active={activeTab === "home"}
          onPress={() => router.replace("/provider/home")}
        />

        <NavItem
          icon="briefcase-outline"
          activeIcon="briefcase"
          label="Jobs"
          active={activeTab === "jobs"}
          onPress={() => router.replace("/provider/open-jobs")}
        />

        <NavItem
          icon="send-outline"
          activeIcon="send"
          label="Offers"
          active={activeTab === "offers"}
          onPress={() => router.replace("/provider/offers")}
        />

        <NavItem
          icon="person-outline"
          activeIcon="person"
          label="Profile"
          active={activeTab === "profile"}
          onPress={() => router.replace("/provider/profile")}
        />
      </View>
    </View>
  );
}