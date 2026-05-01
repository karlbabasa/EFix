export const APP_NAME = "E-Fix";

export const USER_ROLES = {
  CUSTOMER: "customer",
  PROVIDER: "provider",
  ADMIN: "admin",
} as const;

export const PROVIDER_STATUSES = {
  INCOMPLETE: "incomplete",
  PENDING_REVIEW: "pending_review",
  APPROVED: "approved",
  REJECTED: "rejected",
  SUSPENDED: "suspended",
  BANNED: "banned",
} as const;

export const CUSTOMER_STATUSES = {
  ACTIVE: "active",
  LIMITED: "limited",
  SUSPENDED: "suspended",
  BANNED: "banned",
} as const;

export const JOB_STATUSES = {
  DRAFT: "draft",
  OPEN: "open",
  HAS_OFFERS: "has_offers",
  ACCEPTED: "accepted",
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
  DISPUTED: "disputed",
  CLOSED: "closed",
} as const;

export const OFFER_STATUSES = {
  PENDING: "pending",
  ACCEPTED: "accepted",
  REJECTED: "rejected",
  WITHDRAWN: "withdrawn",
  EXPIRED: "expired",
} as const;

export const SERVICE_CATEGORIES = [
  {
    id: "home_repair",
    label: "Home Repair",
    examples: ["Plumbing", "Electrical", "Carpentry"],
  },
  {
    id: "cleaning",
    label: "Cleaning",
    examples: ["House cleaning", "Deep cleaning", "Move-out cleaning"],
  },
  {
    id: "errands",
    label: "Errands",
    examples: ["Pickup", "Delivery", "Buying items"],
  },
  {
    id: "documents",
    label: "Documents",
    examples: ["Queueing", "Pickup", "Delivery", "Form assistance"],
  },
  {
    id: "labor_help",
    label: "Labor Help",
    examples: ["Moving items", "Carrying", "Setup assistance"],
  },
  {
    id: "personal_help",
    label: "Personal Help",
    examples: ["Assistant work", "Booking help", "Basic errands"],
  },
] as const;

export const PROHIBITED_SERVICES = [
  "Fake documents",
  "Forged IDs",
  "Bribery",
  "Fixer services",
  "Bypassing government processes",
  "Illegal permits",
  "Academic cheating",
  "Weapons or dangerous goods",
] as const;