import { useRouter } from "expo-router";

import { Screen } from "@/components/common/Screen";
import { StartScreenContent } from "@/components/onboarding/StartScreenContent";

export default function ProviderStartScreen() {
  const router = useRouter();

  return (
    <Screen className="bg-slate-50">
      <StartScreenContent
        eyebrow="Provider application"
        title="Apply to offer services."
        description="Submit your profile and documents so E-Fix can review your provider account."
        infoTitle="What you’ll prepare"
        infoItems={[
          {
            title: "Service profile",
            description:
              "Your main service, service area, experience, and short description.",
          },
          {
            title: "Identity verification",
            description:
              "Valid ID, selfie with ID, clearance, and proof of address.",
          },
          {
            title: "Admin review",
            description:
              "You can browse previews, but real job access should be locked until approval.",
          },
        ]}
        notice={{
          title: "Approval required",
          description:
            "Providers should only accept real jobs after admin approval.",
        }}
        primaryActionTitle="Start application"
        secondaryActionTitle="I already have an account"
        onPrimaryAction={() => router.push("/auth/provider-register")}
        onSecondaryAction={() => router.push("/auth/sign-in")}
      />
    </Screen>
  );
}