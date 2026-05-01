import type { ReportStatus, ProviderStatus } from "@/types";

export type DemoProviderApplication = {
  id: string;
  name: string;
  service: string;
  location: string;
  submittedAt: string;
  status: ProviderStatus;
  mobile: string;
  email: string;
  experience: string;
  description: string;
  documents: string[];
};

export const demoProviderApplications = [
  {
    id: "mark",
    name: "Mark Dela Cruz",
    service: "Plumbing",
    location: "Dasmariñas, Cavite",
    submittedAt: "Today, 9:30 AM",
    status: "pending",
    mobile: "0912 345 6789",
    email: "mark@example.com",
    experience: "3 years",
    description: "Handles faucet leaks, pipe repairs, and basic home plumbing.",
    documents: [
      "Valid government ID",
      "Selfie with ID",
      "Barangay Clearance",
      "Proof of address",
    ],
  },
  {
    id: "jun",
    name: "Jun Reyes",
    service: "Home repair",
    location: "Imus, Cavite",
    submittedAt: "Yesterday, 4:10 PM",
    status: "pending",
    mobile: "0923 456 7890",
    email: "jun@example.com",
    experience: "5 years",
    description: "General home repair, basic carpentry, and maintenance.",
    documents: [
      "Valid government ID",
      "Selfie with ID",
      "Police Clearance",
      "Proof of address",
    ],
  },
  {
    id: "ana",
    name: "Ana Santos",
    service: "Cleaning",
    location: "Bacoor, Cavite",
    submittedAt: "Yesterday, 11:45 AM",
    status: "pending",
    mobile: "0934 567 8901",
    email: "ana@example.com",
    experience: "2 years",
    description: "Home cleaning, move-in cleaning, and basic organizing.",
    documents: [
      "Valid government ID",
      "Selfie with ID",
      "Barangay Clearance",
      "Proof of address",
    ],
  },
] satisfies DemoProviderApplication[];

export type DemoReport = {
  id: string;
  reporter: string;
  reportedUser: string;
  reason: string;
  jobTitle: string;
  submittedAt: string;
  status: ReportStatus;
  details: string;
  evidence: string[];
};

export const demoReports = [
  {
    id: "no-show",
    reporter: "Customer Karl B.",
    reportedUser: "Provider Mark D.",
    reason: "No show",
    jobTitle: "Fix leaking faucet",
    submittedAt: "Today, 10:15 AM",
    status: "open",
    details:
      "Customer reported that the provider accepted the job but did not arrive at the agreed time and stopped responding.",
    evidence: ["Job details", "Offer record", "Message history placeholder"],
  },
  {
    id: "illegal-request",
    reporter: "Provider Jun R.",
    reportedUser: "Customer Ana S.",
    reason: "Illegal request",
    jobTitle: "Document pickup assistance",
    submittedAt: "Yesterday, 6:40 PM",
    status: "open",
    details:
      "Provider reported that the customer requested assistance that may bypass a legal process.",
    evidence: ["Job details", "Report notes", "Message history placeholder"],
  },
] satisfies DemoReport[];