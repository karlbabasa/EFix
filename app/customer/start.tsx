import { useRouter } from "expo-router";

import { Screen } from "@/components/common/Screen";
import { StartScreenContent } from "@/components/onboarding/StartScreenContent";

export default function CustomerStartScreen() {
  const router = useRouter();

  return (
    <Screen className="bg-slate-50">
      <StartScreenContent
        eyebrow="Customer account"
        title="Request services with less guesswork."
        description="Create an account to post jobs, compare provider offers, and track your requests."
        infoTitle="What you can do"
        infoItems={[
          {
            title: "Post a job",
            description:
              "Describe what you need, your location, schedule, and budget.",
          },
          {
            title: "Compare offers",
            description:
              "Review provider prices, schedules, and messages before choosing.",
          },
          {
            title: "Track the job",
            description:
              "Follow the request from posted, accepted, in progress, and completed.",
          },
        ]}
        primaryActionTitle="Create customer account"
        secondaryActionTitle="I already have an account"
        onPrimaryAction={() => router.push("/auth/customer-register")}
        onSecondaryAction={() => router.push("/auth/sign-in")}
      />
    </Screen>
  );
}