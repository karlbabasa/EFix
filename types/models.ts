export type UserRole = "customer" | "provider" | "admin";

export type ProviderStatus =
  | "pending"
  | "approved"
  | "rejected"
  | "resubmission_required"
  | "suspended";

export type ProviderDocumentType =
  | "government_id"
  | "selfie_with_id"
  | "clearance"
  | "proof_of_address"
  | "skill_certificate";

export type ProviderDocumentStatus =
  | "uploaded"
  | "approved"
  | "rejected"
  | "resubmission_required";

export type JobStatus =
  | "open"
  | "offer_accepted"
  | "in_progress"
  | "completed"
  | "cancelled"
  | "disputed";

export type OfferStatus =
  | "pending"
  | "accepted"
  | "rejected"
  | "withdrawn";

export type ReportStatus =
  | "open"
  | "reviewing"
  | "resolved"
  | "dismissed";

export type AdminActionType =
  | "approve"
  | "reject"
  | "request_resubmission"
  | "resolve"
  | "dismiss"
  | "warn"
  | "suspend"
  | "ban";

export type AdminTargetType =
  | "provider_application"
  | "provider_document"
  | "report"
  | "job"
  | "user";

export type User = {
  id: string;
  fullName: string;
  email: string;
  mobileNumber: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
};

export type ProviderProfile = {
  id: string;
  userId: string;
  mainService: string;
  serviceArea: string;
  experience: string;
  description: string;
  status: ProviderStatus;
  adminNotes?: string;
  reviewedBy?: string;
  reviewedAt?: string;
  createdAt: string;
  updatedAt: string;
};

export type ProviderDocument = {
  id: string;
  providerProfileId: string;
  documentType: ProviderDocumentType;
  fileUrl: string;
  status: ProviderDocumentStatus;
  adminNotes?: string;
  uploadedAt: string;
  reviewedAt?: string;
};

export type Job = {
  id: string;
  customerId: string;
  title: string;
  category: string;
  description: string;
  location: string;
  preferredSchedule: string;
  budgetMin?: number;
  budgetMax?: number;
  status: JobStatus;
  acceptedOfferId?: string;
  createdAt: string;
  updatedAt: string;
};

export type Offer = {
  id: string;
  jobId: string;
  providerId: string;
  price: number;
  estimatedTime: string;
  message: string;
  status: OfferStatus;
  createdAt: string;
  updatedAt: string;
};

export type Review = {
  id: string;
  jobId: string;
  customerId: string;
  providerId: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment?: string;
  createdAt: string;
};

export type Report = {
  id: string;
  jobId: string;
  reporterId: string;
  reportedUserId: string;
  reason: string;
  details: string;
  status: ReportStatus;
  adminNotes?: string;
  resolvedBy?: string;
  resolvedAt?: string;
  createdAt: string;
  updatedAt: string;
};

export type AdminAction = {
  id: string;
  adminId: string;
  targetUserId?: string;
  targetType: AdminTargetType;
  targetId: string;
  action: AdminActionType;
  notes: string;
  createdAt: string;
};