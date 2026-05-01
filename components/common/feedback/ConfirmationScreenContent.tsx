import { Text, View } from "react-native";

import { Button } from "@/components/ui/Button";

type Step = {
  text: string;
};

type ConfirmationScreenContentProps = {
  icon?: string;
  eyebrow: string;
  title: string;
  description: string;
  cardTitle: string;
  steps: Step[];
  primaryActionTitle: string;
  secondaryActionTitle?: string;
  onPrimaryAction: () => void;
  onSecondaryAction?: () => void;
};

export function ConfirmationScreenContent({
  icon = "✓",
  eyebrow,
  title,
  description,
  cardTitle,
  steps,
  primaryActionTitle,
  secondaryActionTitle,
  onPrimaryAction,
  onSecondaryAction,
}: ConfirmationScreenContentProps) {
  return (
    <View className="flex-1 justify-between">
      <View>
        <View className="h-14 w-14 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50">
          <Text className="text-2xl font-bold text-emerald-700">
            {icon}
          </Text>
        </View>

        <Text className="mt-8 text-sm font-semibold text-slate-500">
          {eyebrow}
        </Text>

        <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
          {title}
        </Text>

        <Text className="mt-3 text-base leading-6 text-slate-600">
          {description}
        </Text>

        <View className="mt-8 rounded-3xl border border-slate-200 bg-white p-5">
          <Text className="text-base font-bold text-slate-950">
            {cardTitle}
          </Text>

          <View className="mt-5 gap-4">
            {steps.map((step, index) => (
              <View key={step.text} className="flex-row gap-3">
                <View className="h-6 w-6 items-center justify-center rounded-full bg-slate-100">
                  <Text className="text-xs font-bold text-slate-600">
                    {index + 1}
                  </Text>
                </View>

                <Text className="flex-1 text-sm leading-5 text-slate-600">
                  {step.text}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View className="gap-3 pb-2">
        <Button title={primaryActionTitle} onPress={onPrimaryAction} />

        {secondaryActionTitle && onSecondaryAction ? (
          <Button
            title={secondaryActionTitle}
            variant="secondary"
            onPress={onSecondaryAction}
          />
        ) : null}
      </View>
    </View>
  );
}