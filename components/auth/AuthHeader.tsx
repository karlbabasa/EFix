import { Text, View } from "react-native";

type AuthHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function AuthHeader({ eyebrow, title, description }: AuthHeaderProps) {
  return (
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
    </View>
  );
}