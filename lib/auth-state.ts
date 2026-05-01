export type UserRole = "guest" | "customer" | "provider" | "admin";

export type ProviderStatus =
  | "none"
  | "pending"
  | "approved"
  | "rejected"
  | "suspended";

export type AppUser = {
  id: string;
  name: string;
  role: UserRole;
  providerStatus: ProviderStatus;
};

export const demoUser: AppUser = {
  id: "demo-user",
  name: "Karl",
  role: "customer",
  providerStatus: "none",
};

export function isCustomer(user: AppUser) {
  return user.role === "customer";
}

export function isProvider(user: AppUser) {
  return user.role === "provider";
}

export function isApprovedProvider(user: AppUser) {
  return user.role === "provider" && user.providerStatus === "approved";
}

export function isPendingProvider(user: AppUser) {
  return user.role === "provider" && user.providerStatus === "pending";
}

export function isAdmin(user: AppUser) {
  return user.role === "admin";
}