import { useRouter } from "expo-router";

import { Screen } from "@/components/common/Screen";
import { ConfirmationScreenContent } from "@/components/common/feedback/ConfirmationScreenContent";

export default function ReportSubmittedScreen() {
  const router = useRouter();

  return (
    <Screen className="bg-slate-50">
      <ConfirmationScreenContent
        icon="!"
        eyebrow="Report submitted"
        title="We received your report."
        description="This is only a placeholder for now. Later, admin will review reports and update the case status."
        cardTitle="Future admin actions"
        steps={[
          { text: "Review job and user details." },
          { text: "Contact customer or provider if needed." },
          { text: "Resolve, dismiss, warn, suspend, or ban." },
        ]}
        primaryActionTitle="Back to customer home"
        secondaryActionTitle="Back to provider home"
        onPrimaryAction={() => router.replace("/customer/home")}
        onSecondaryAction={() => router.replace("/provider/home")}
      />
    </Screen>
  );
}