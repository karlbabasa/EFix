import { useRouter } from "expo-router";

import { Screen } from "@/components/common/Screen";
import { ConfirmationScreenContent } from "@/components/common/feedback/ConfirmationScreenContent";

export default function ProviderOfferSentScreen() {
  const router = useRouter();

  return (
    <Screen className="bg-slate-50">
      <ConfirmationScreenContent
        eyebrow="Offer sent"
        title="Your offer was submitted."
        description="The customer can now review your offer together with other provider offers."
        cardTitle="What happens next"
        steps={[
          { text: "Customer reviews your offer." },
          { text: "Customer may accept, reject, or wait for more offers." },
          { text: "If accepted, the job moves to accepted status." },
        ]}
        primaryActionTitle="Back to open jobs"
        secondaryActionTitle="Provider home"
        onPrimaryAction={() => router.replace("/provider/open-jobs")}
        onSecondaryAction={() => router.replace("/provider/home")}
      />
    </Screen>
  );
}