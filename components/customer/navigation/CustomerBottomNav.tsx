import Ionicons from "@expo/vector-icons/Ionicons";
import { usePathname, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type CustomerTab = "home" | "jobs" | "offers" | "profile";

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

function getActiveTab(pathname: string): CustomerTab {
  if (
    pathname.includes("/customer/jobs") ||
    pathname.includes("/customer/job-status") ||
    pathname.includes("/customer/rate-provider")
  ) {
    return "jobs";
  }

  if (pathname.includes("/customer/offers")) {
    return "offers";
  }

  if (pathname.includes("/customer/profile")) {
    return "profile";
  }

  return "home";
}

export function CustomerBottomNav() {
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
          onPress={() => router.replace("/customer/home")}
        />

        <NavItem
          icon="briefcase-outline"
          activeIcon="briefcase"
          label="Jobs"
          active={activeTab === "jobs"}
          onPress={() => router.replace("/customer/jobs")}
        />

        <View className="w-16 items-center">
          <Pressable
            onPress={() => router.push("/customer/post-job")}
            className="-mt-8 h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-slate-950 active:opacity-80"
          >
            <Ionicons name="add" size={34} color="#FFFFFF" />
          </Pressable>

          <Text className="mt-1 text-[11px] font-semibold text-slate-950">
            Post
          </Text>
        </View>

        <NavItem
          icon="pricetag-outline"
          activeIcon="pricetag"
          label="Offers"
          active={activeTab === "offers"}
          onPress={() => router.replace("/customer/offers")}
        />

        <NavItem
          icon="person-outline"
          activeIcon="person"
          label="Profile"
          active={activeTab === "profile"}
          onPress={() => router.replace("/customer/profile")}
        />
      </View>
    </View>
  );
}