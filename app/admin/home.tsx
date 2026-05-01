import { Alert } from "react-native";

import { ScrollScreen } from "@/components/common/ScrollScreen";
import { AdminHomeDashboard } from "@/components/admin/home/AdminHomeDashboard";

export default function AdminHomeScreen() {
  return (
    <ScrollScreen className="bg-slate-50">
      <AdminHomeDashboard
        onReviewProvider={() => Alert.alert("Provider review placeholder")}
        onReviewReport={() => Alert.alert("Report review placeholder")}
      />
    </ScrollScreen>
  );
}