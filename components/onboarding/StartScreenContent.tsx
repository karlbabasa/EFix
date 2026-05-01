import { Text, View } from "react-native";

import { Button } from "@/components/ui/Button";

type InfoItem = {
  title: string;
  description: string;
};

type Notice = {
  title: string;
  description: string;
};

type StartScreenContentProps = {
  eyebrow: string;
  title: string;
  description: string;
  infoTitle: string;
  infoItems: InfoItem[];
  notice?: Notice;
  primaryActionTitle: string;
  secondaryActionTitle: string;
  onPrimaryAction: () => void;
  onSecondaryAction: () => void;
};

export function StartScreenContent({
  eyebrow,
  title,
  description,
  infoTitle,
  infoItems,
  notice,
  primaryActionTitle,
  secondaryActionTitle,
  onPrimaryAction,
  onSecondaryAction,
}: StartScreenContentProps) {
  return (
    <View className="flex-1 justify-between">
      <View>
        <Text className="text-sm font-semibold text-slate-500">
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
            {infoTitle}
          </Text>

          <View className="mt-5 gap-5">
            {infoItems.map((item, index) => (
              <View key={item.title}>
                <Text className="text-sm font-bold text-slate-950">
                  {item.title}
                </Text>

                <Text className="mt-1 text-sm leading-5 text-slate-500">
                  {item.description}
                </Text>

                {index !== infoItems.length - 1 ? (
                  <View className="mt-5 h-px bg-slate-100" />
                ) : null}
              </View>
            ))}
          </View>
        </View>

        {notice ? (
          <View className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <Text className="text-sm font-bold text-amber-900">
              {notice.title}
            </Text>

            <Text className="mt-2 text-sm leading-5 text-amber-900">
              {notice.description}
            </Text>
          </View>
        ) : null}
      </View>

      <View className="gap-3 pb-2">
        <Button title={primaryActionTitle} onPress={onPrimaryAction} />

        <Button
          title={secondaryActionTitle}
          variant="secondary"
          onPress={onSecondaryAction}
        />
      </View>
    </View>
  );
}