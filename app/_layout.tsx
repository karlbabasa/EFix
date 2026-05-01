import "../global.css";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  /*
    ROUTE PROTECTION PLAN — DO NOT ENABLE YET

    Later, when real auth is ready, replace the plain Stack screens
    with Stack.Protected groups.

    Public routes:
    - /
    - /role-selection
    - /auth/sign-in
    - /auth/customer-register
    - /auth/provider-register
    - /auth/provider-profile
    - /auth/provider-documents
    - /auth/provider-pending-review

    Customer routes:
    - /customer/home
    - /customer/post-job
    - /customer/job-posted
    - /customer/offers
    - /customer/offer-accepted
    - /customer/job-status
    - /customer/rate-provider

    Provider routes:
    - /provider/home
    - /provider/open-jobs
    - /provider/job-details
    - /provider/send-offer
    - /provider/offer-sent

    Admin routes:
    - /admin/home
    - /admin/provider-reviews
    - /admin/provider-review-detail
    - /admin/report-reviews
    - /admin/report-review-detail

    Shared authenticated routes:
    - /report
    - /report-submitted

    Future guards:
    const canUseCustomer = user.role === "customer";
    const canUseProvider = user.role === "provider";
    const canSendProviderOffers =
      user.role === "provider" && user.providerStatus === "approved";
    const canUseAdmin = user.role === "admin";

    Important:
    Keep admin routes hidden from public onboarding.
  */

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style="auto" />
    </>
  );
}