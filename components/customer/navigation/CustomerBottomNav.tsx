import { Pressable, Text, View } from "react-native";

type CustomerBottomNavProps = {
  activeTab: "home" | "jobs" | "offers" | "profile";
  onHomePress: () => void;
  onJobsPress: () => void;
  onPostPress: () => void;
  onOffersPress: () => void;
  onProfilePress: () => void;
};

type NavItemProps = {
  icon: string;
  label: string;
  active?: boolean;
  onPress: () => void;
};

function NavItem({ icon, label, active = false, onPress }: NavItemProps) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-1 items-center justify-center py-2 active:opacity-70"
    >
      <Text
        className={`text-lg font-bold ${
          active ? "text-slate-950" : "text-slate-400"
        }`}
      >
        {icon}
      </Text>

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

export function CustomerBottomNav({
  activeTab,
  onHomePress,
  onJobsPress,
  onPostPress,
  onOffersPress,
  onProfilePress,
}: CustomerBottomNavProps) {
  return (
    <View className="absolute bottom-0 left-0 right-0 border-t border-slate-200 bg-white px-4 pb-2 pt-2">
      <View className="flex-row items-center justify-between">
        <NavItem
          icon="⌂"
          label="Home"
          active={activeTab === "home"}
          onPress={onHomePress}
        />

        <NavItem
          icon="▤"
          label="Jobs"
          active={activeTab === "jobs"}
          onPress={onJobsPress}
        />

        <View className="w-16 items-center">
          <Pressable
            onPress={onPostPress}
            className="-mt-8 h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-slate-950 active:opacity-80"
          >
            <Text className="text-3xl font-light leading-none text-white">
              +
            </Text>
          </Pressable>

          <Text className="mt-1 text-[11px] font-semibold text-slate-950">
            Post
          </Text>
        </View>

        <NavItem
          icon="₱"
          label="Offers"
          active={activeTab === "offers"}
          onPress={onOffersPress}
        />

        <NavItem
          icon="○"
          label="Profile"
          active={activeTab === "profile"}
          onPress={onProfilePress}
        />
      </View>
    </View>
  );
}