import {
  CUSTOMER_STATUSES,
  JOB_STATUSES,
  OFFER_STATUSES,
  PROVIDER_STATUSES,
  USER_ROLES,
} from "@/constants/app";

export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];

export type ProviderStatus =
  (typeof PROVIDER_STATUSES)[keyof typeof PROVIDER_STATUSES];

export type CustomerStatus =
  (typeof CUSTOMER_STATUSES)[keyof typeof CUSTOMER_STATUSES];

export type JobStatus = (typeof JOB_STATUSES)[keyof typeof JOB_STATUSES];

export type OfferStatus = (typeof OFFER_STATUSES)[keyof typeof OFFER_STATUSES];