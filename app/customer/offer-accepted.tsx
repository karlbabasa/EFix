import { useRouter } from "expo-router";

import { Screen } from "@/components/common/Screen";
import { ConfirmationScreenContent } from "@/components/common/feedback/ConfirmationScreenContent";

export default function OfferAcceptedScreen() {
  const router = useRouter();

  return (
    <Screen className="bg-slate-50">
      <ConfirmationScreenContent
        eyebrow="Offer accepted"
        title="Provider selected."
        description="The job is now accepted. You can track the request until it is completed."
        cardTitle="Current job status"
        steps={[
          { text: "Offer accepted." },
          { text: "Waiting for the provider to start the job." },
          { text: "Mark the job completed after the work is done." },
        ]}
        primaryActionTitle="Track job"
        secondaryActionTitle="View offers again"
        onPrimaryAction={() => router.replace("/customer/job-status")}
        onSecondaryAction={() => router.replace("/customer/offers")}
      />
    </Screen>
  );
}