export const routeAccessPlan = {
  public: [
    "/",
    "/role-selection",
    "/auth/sign-in",
    "/auth/customer-register",
    "/auth/provider-register",
    "/auth/provider-profile",
    "/auth/provider-documents",
    "/auth/provider-pending-review",
  ],

  customer: [
    "/customer/home",
    "/customer/post-job",
    "/customer/job-posted",
    "/customer/offers",
    "/customer/offer-accepted",
    "/customer/job-status",
    "/customer/rate-provider",
  ],

  provider: [
    "/provider/home",
    "/provider/open-jobs",
    "/provider/job-details",
    "/provider/send-offer",
    "/provider/offer-sent",
  ],

  admin: [
    "/admin/home",
    "/admin/provider-reviews",
    "/admin/provider-review-detail",
    "/admin/report-reviews",
    "/admin/report-review-detail",
  ],

  sharedAuthenticated: ["/report", "/report-submitted"],
} as const;