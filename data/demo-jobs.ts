import type { JobStatus, OfferStatus } from "@/types";

export type DemoJob = {
  id: string;
  title: string;
  category: string;
  location: string;
  budget: string;
  schedule: string;
  description: string;
  status: JobStatus;
};

export const demoJobs = [
  {
    id: "faucet",
    title: "Fix leaking faucet",
    category: "Plumbing",
    location: "Dasmariñas, Cavite",
    budget: "₱500 - ₱1,000",
    schedule: "Tomorrow afternoon",
    description:
      "Kitchen faucet is leaking even when closed. Customer needs someone to check and fix it.",
    status: "open",
  },
  {
    id: "cleaning",
    title: "House cleaning",
    category: "Cleaning",
    location: "Imus, Cavite",
    budget: "₱800 - ₱1,500",
    schedule: "This weekend",
    description:
      "General house cleaning for a small home. Customer prefers weekend schedule.",
    status: "open",
  },
  {
    id: "documents",
    title: "Document pickup assistance",
    category: "Documents",
    location: "Trece Martires, Cavite",
    budget: "₱300 - ₱600",
    schedule: "Friday morning",
    description:
      "Customer needs help picking up documents. No fixer service or illegal processing allowed.",
    status: "open",
  },
] satisfies DemoJob[];

export type DemoOffer = {
  id: string;
  providerName: string;
  service: string;
  rating: string;
  price: string;
  time: string;
  message: string;
  status: OfferStatus;
};

export const demoOffers = [
  {
    id: "mark-offer",
    providerName: "Mark D.",
    service: "Plumbing",
    price: "₱800",
    time: "Tomorrow afternoon",
    message: "I can check the leak and replace small parts if needed.",
    rating: "4.8",
    status: "pending",
  },
  {
    id: "jun-offer",
    providerName: "Jun R.",
    service: "Home repair",
    price: "₱950",
    time: "Tomorrow morning",
    message: "I can inspect the faucet and bring basic tools.",
    rating: "4.6",
    status: "pending",
  },
] satisfies DemoOffer[];