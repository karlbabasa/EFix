-- E-Fix initial schema
-- Run this in Supabase SQL Editor.

create extension if not exists "pgcrypto";

create type public.user_role as enum (
  'customer',
  'provider',
  'admin'
);

create type public.provider_status as enum (
  'pending',
  'approved',
  'rejected',
  'resubmission_required',
  'suspended'
);

create type public.provider_document_type as enum (
  'government_id',
  'selfie_with_id',
  'clearance',
  'proof_of_address',
  'skill_certificate'
);

create type public.provider_document_status as enum (
  'uploaded',
  'approved',
  'rejected',
  'resubmission_required'
);

create type public.job_status as enum (
  'open',
  'offer_accepted',
  'in_progress',
  'completed',
  'cancelled',
  'disputed'
);

create type public.offer_status as enum (
  'pending',
  'accepted',
  'rejected',
  'withdrawn'
);

create type public.report_status as enum (
  'open',
  'reviewing',
  'resolved',
  'dismissed'
);

create type public.admin_action_type as enum (
  'approve',
  'reject',
  'request_resubmission',
  'resolve',
  'dismiss',
  'warn',
  'suspend',
  'ban'
);

create type public.admin_target_type as enum (
  'provider_application',
  'provider_document',
  'report',
  'job',
  'user'
);

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  email text not null,
  mobile_number text,
  role public.user_role not null default 'customer',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.provider_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  main_service text not null,
  service_area text not null,
  experience text,
  description text,
  status public.provider_status not null default 'pending',
  admin_notes text,
  reviewed_by uuid references public.profiles(id),
  reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id)
);

create table public.provider_documents (
  id uuid primary key default gen_random_uuid(),
  provider_profile_id uuid not null references public.provider_profiles(id) on delete cascade,
  document_type public.provider_document_type not null,
  file_path text not null,
  status public.provider_document_status not null default 'uploaded',
  admin_notes text,
  uploaded_at timestamptz not null default now(),
  reviewed_at timestamptz
);

create table public.jobs (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  category text not null,
  description text not null,
  location text not null,
  preferred_schedule text not null,
  budget_min numeric,
  budget_max numeric,
  status public.job_status not null default 'open',
  accepted_offer_id uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.offers (
  id uuid primary key default gen_random_uuid(),
  job_id uuid not null references public.jobs(id) on delete cascade,
  provider_id uuid not null references public.provider_profiles(id) on delete cascade,
  price numeric not null,
  estimated_time text not null,
  message text not null,
  status public.offer_status not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (job_id, provider_id)
);

alter table public.jobs
add constraint jobs_accepted_offer_id_fkey
foreign key (accepted_offer_id)
references public.offers(id);

create table public.reviews (
  id uuid primary key default gen_random_uuid(),
  job_id uuid not null references public.jobs(id) on delete cascade,
  customer_id uuid not null references public.profiles(id) on delete cascade,
  provider_id uuid not null references public.provider_profiles(id) on delete cascade,
  rating integer not null check (rating between 1 and 5),
  comment text,
  created_at timestamptz not null default now(),
  unique (job_id)
);

create table public.reports (
  id uuid primary key default gen_random_uuid(),
  job_id uuid references public.jobs(id) on delete set null,
  reporter_id uuid not null references public.profiles(id) on delete cascade,
  reported_user_id uuid not null references public.profiles(id) on delete cascade,
  reason text not null,
  details text not null,
  status public.report_status not null default 'open',
  admin_notes text,
  resolved_by uuid references public.profiles(id),
  resolved_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.admin_actions (
  id uuid primary key default gen_random_uuid(),
  admin_id uuid not null references public.profiles(id) on delete cascade,
  target_user_id uuid references public.profiles(id) on delete set null,
  target_type public.admin_target_type not null,
  target_id uuid not null,
  action public.admin_action_type not null,
  notes text not null,
  created_at timestamptz not null default now()
);

create index provider_profiles_user_id_idx on public.provider_profiles(user_id);
create index provider_profiles_status_idx on public.provider_profiles(status);
create index provider_documents_provider_profile_id_idx on public.provider_documents(provider_profile_id);
create index jobs_customer_id_idx on public.jobs(customer_id);
create index jobs_status_idx on public.jobs(status);
create index offers_job_id_idx on public.offers(job_id);
create index offers_provider_id_idx on public.offers(provider_id);
create index reports_status_idx on public.reports(status);
create index reports_reporter_id_idx on public.reports(reporter_id);
create index reports_reported_user_id_idx on public.reports(reported_user_id);

alter table public.profiles enable row level security;
alter table public.provider_profiles enable row level security;
alter table public.provider_documents enable row level security;
alter table public.jobs enable row level security;
alter table public.offers enable row level security;
alter table public.reviews enable row level security;
alter table public.reports enable row level security;
alter table public.admin_actions enable row level security;