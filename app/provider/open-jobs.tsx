import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { ScrollScreen } from "@/components/common/ScrollScreen";
import { Button } from "@/components/ui/Button";

const openJobs = [
  {
    title: "Fix leaking faucet",
    category: "Plumbing",
    location: "Dasmariñas, Cavite",
    budget: "₱500 - ₱1,000",
    schedule: "Tomorrow afternoon",
  },
  {
    title: "House cleaning",
    category: "Cleaning",
    location: "Imus, Cavite",
    budget: "₱800 - ₱1,500",
    schedule: "This weekend",
  },
  {
    title: "Document pickup assistance",
    category: "Documents",
    location: "Trece Martires, Cavite",
    budget: "₱300 - ₱600",
    schedule: "Friday morning",
  },
];

export default function ProviderOpenJobsScreen() {
  const router = useRouter();

  return (
    <ScrollScreen>
      <Text className="text-sm font-semibold text-slate-500">
        Open jobs
      </Text>

      <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
        Jobs nearby.
      </Text>

      <Text className="mt-3 text-base leading-6 text-slate-600">
        These are sample job posts for now. Later, approved providers will see real customer requests here.
      </Text>

      <View className="mt-8 gap-3">
        {openJobs.map((job) => (
          <View
            key={job.title}
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >
            <Text className="text-base font-semibold text-slate-950">
              {job.title}
            </Text>

            <Text className="mt-2 text-sm leading-5 text-slate-500">
              {job.category} • {job.location}
            </Text>

            <View className="mt-4 gap-1">
              <Text className="text-sm text-slate-600">
                Budget: {job.budget}
              </Text>

              <Text className="text-sm text-slate-600">
                Schedule: {job.schedule}
              </Text>
            </View>

            <View className="mt-4">
              <Button
                title="View details"
                variant="secondary"
                onPress={() => {}}
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