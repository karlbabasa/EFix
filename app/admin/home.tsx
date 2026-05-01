import { useRouter } from "expo-router";

import { ScrollScreen } from "@/components/common/ScrollScreen";
import { AdminHomeDashboard } from "@/components/admin/home/AdminHomeDashboard";

export default function AdminHomeScreen() {
  const router = useRouter();

  return (
    <ScrollScreen className="bg-slate-50">
      <AdminHomeDashboard
        onReviewProvider={() => router.push("/admin/provider-reviews")}
        onReviewReport={() => router.push("/admin/report-reviews")}
      />
    </ScrollScreen>
  );
}