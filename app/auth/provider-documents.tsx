import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { ScrollScreen } from "@/components/common/ScrollScreen";
import { Button } from "@/components/ui/Button";

const documents = [
  {
    title: "Valid government ID",
    description: "Clear photo or PDF of your ID.",
    required: true,
  },
  {
    title: "Selfie with ID",
    description: "A selfie while holding the same ID.",
    required: true,
  },
  {
    title: "Barangay or Police Clearance",
    description: "Recent clearance for verification.",
    required: true,
  },
  {
    title: "Proof of address",
    description: "Utility bill, barangay certificate, or similar proof.",
    required: true,
  },
  {
    title: "Skill certificate",
    description: "Optional, but useful for technical services.",
    required: false,
  },
];

export default function ProviderDocumentsScreen() {
  const router = useRouter();

  return (
    <ScrollScreen>
      <Text className="text-sm font-semibold text-slate-500">
        Document review
      </Text>

      <Text className="mt-4 text-3xl font-extrabold leading-tight text-slate-950">
        Upload your documents.
      </Text>

      <Text className="mt-3 text-base leading-6 text-slate-600">
        We’ll use these to review your provider application. These are not shown to customers.
      </Text>

      <View className="mt-8 gap-3">
        {documents.map((document) => (
          <View
            key={document.title}
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >
            <View className="flex-row items-start justify-between gap-4">
              <View className="flex-1">
                <Text className="text-base font-semibold text-slate-950">
                  {document.title}
                </Text>

                <Text className="mt-1 text-sm leading-5 text-slate-500">
                  {document.description}
                </Text>
              </View>

              <Text
                className={`text-xs font-semibold ${
                  document.required ? "text-red-600" : "text-slate-400"
                }`}
              >
                {document.required ? "Required" : "Optional"}
              </Text>
            </View>

            <View className="mt-4">
              <Button
                title="Choose file"
                variant="secondary"
                onPress={() => {}}
              />
            </View>
          </View>
        ))}
      </View>

      <View className="mt-5 rounded-2xl border border-slate-200 bg-white p-4">
        <Text className="text-sm font-semibold text-slate-950">
          Privacy note
        </Text>

        <Text className="mt-2 text-sm leading-5 text-slate-500">
          Only authorized admins should review provider documents. Later, we’ll store these privately and avoid public file links.
        </Text>
      </View>

      <View className="mt-8 gap-3 pb-2">
        <Button
          title="Submit for review"
          onPress={() => router.replace("/auth/provider-pending-review")}
        />

        <Button
          title="Back"
          variant="secondary"
          onPress={() => router.back()}
        />
      </View>
    </ScrollScreen>
  );
}