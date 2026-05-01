import { useRouter } from "expo-router";

import { Screen } from "@/components/common/Screen";
import { ConfirmationScreenContent } from "@/components/common/feedback/ConfirmationScreenContent";

export default function JobPostedScreen() {
  const router = useRouter();

  return (
    <Screen className="bg-slate-50">
      <ConfirmationScreenContent
        eyebrow="Job posted"
        title="Your request is open."
        description="Providers can now review your job and send offers. Compare them before choosing who to hire."
        cardTitle="What happens next"
        steps={[
          { text: "Providers see your job request." },
          { text: "Interested providers send their offer." },
          { text: "You choose the provider that fits your needs." },
        ]}
        primaryActionTitle="View offers"
        secondaryActionTitle="Post another job"
        onPrimaryAction={() => router.replace("/customer/offers")}
        onSecondaryAction={() => router.replace("/customer/post-job")}
      />
    </Screen>
  );
}