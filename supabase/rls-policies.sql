-- E-Fix initial RLS policies
-- Run this after schema.sql.

-- Helper: check if current auth user is admin
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and role = 'admin'
  );
$$;

-- Helper: check if current auth user is an approved provider
create or replace function public.is_approved_provider()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.provider_profiles
    where user_id = auth.uid()
      and status = 'approved'
  );
$$;

-- =========================
-- profiles
-- =========================

create policy "Users can read own profile"
on public.profiles
for select
to authenticated
using (id = auth.uid() or public.is_admin());

create policy "Users can insert own profile"
on public.profiles
for insert
to authenticated
with check (id = auth.uid());

create policy "Users can update own profile"
on public.profiles
for update
to authenticated
using (id = auth.uid())
with check (id = auth.uid());

create policy "Admins can update profiles"
on public.profiles
for update
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- =========================
-- provider_profiles
-- =========================

create policy "Providers can read own provider profile"
on public.provider_profiles
for select
to authenticated
using (user_id = auth.uid() or public.is_admin());

create policy "Approved providers are visible to authenticated users"
on public.provider_profiles
for select
to authenticated
using (status = 'approved');

create policy "Providers can create own provider profile"
on public.provider_profiles
for insert
to authenticated
with check (user_id = auth.uid());

create policy "Providers can update own pending provider profile"
on public.provider_profiles
for update
to authenticated
using (
  user_id = auth.uid()
  and status in ('pending', 'resubmission_required')
)
with check (
  user_id = auth.uid()
  and status in ('pending', 'resubmission_required')
);

create policy "Admins can update provider profiles"
on public.provider_profiles
for update
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- =========================
-- provider_documents
-- =========================

create policy "Providers can read own documents"
on public.provider_documents
for select
to authenticated
using (
  public.is_admin()
  or exists (
    select 1
    from public.provider_profiles pp
    where pp.id = provider_documents.provider_profile_id
      and pp.user_id = auth.uid()
  )
);

create policy "Providers can insert own documents"
on public.provider_documents
for insert
to authenticated
with check (
  exists (
    select 1
    from public.provider_profiles pp
    where pp.id = provider_documents.provider_profile_id
      and pp.user_id = auth.uid()
  )
);

create policy "Providers can update own documents needing resubmission"
on public.provider_documents
for update
to authenticated
using (
  exists (
    select 1
    from public.provider_profiles pp
    where pp.id = provider_documents.provider_profile_id
      and pp.user_id = auth.uid()
  )
  and status in ('uploaded', 'resubmission_required')
)
with check (
  exists (
    select 1
    from public.provider_profiles pp
    where pp.id = provider_documents.provider_profile_id
      and pp.user_id = auth.uid()
  )
);

create policy "Admins can update provider documents"
on public.provider_documents
for update
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- =========================
-- jobs
-- =========================

create policy "Customers can read own jobs"
on public.jobs
for select
to authenticated
using (customer_id = auth.uid() or public.is_admin());

create policy "Approved providers can read open jobs"
on public.jobs
for select
to authenticated
using (
  status = 'open'
  and public.is_approved_provider()
);

create policy "Customers can create own jobs"
on public.jobs
for insert
to authenticated
with check (customer_id = auth.uid());

create policy "Customers can update own jobs"
on public.jobs
for update
to authenticated
using (customer_id = auth.uid())
with check (customer_id = auth.uid());

create policy "Admins can update jobs"
on public.jobs
for update
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- =========================
-- offers
-- =========================

create policy "Customers can read offers for own jobs"
on public.offers
for select
to authenticated
using (
  public.is_admin()
  or exists (
    select 1
    from public.jobs j
    where j.id = offers.job_id
      and j.customer_id = auth.uid()
  )
  or exists (
    select 1
    from public.provider_profiles pp
    where pp.id = offers.provider_id
      and pp.user_id = auth.uid()
  )
);

create policy "Approved providers can create own offers"
on public.offers
for insert
to authenticated
with check (
  exists (
    select 1
    from public.provider_profiles pp
    where pp.id = offers.provider_id
      and pp.user_id = auth.uid()
      and pp.status = 'approved'
  )
);

create policy "Providers can update own pending offers"
on public.offers
for update
to authenticated
using (
  exists (
    select 1
    from public.provider_profiles pp
    where pp.id = offers.provider_id
      and pp.user_id = auth.uid()
  )
  and status = 'pending'
)
with check (
  exists (
    select 1
    from public.provider_profiles pp
    where pp.id = offers.provider_id
      and pp.user_id = auth.uid()
  )
);

create policy "Customers can update offers for own jobs"
on public.offers
for update
to authenticated
using (
  exists (
    select 1
    from public.jobs j
    where j.id = offers.job_id
      and j.customer_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.jobs j
    where j.id = offers.job_id
      and j.customer_id = auth.uid()
  )
);

create policy "Admins can update offers"
on public.offers
for update
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- =========================
-- reviews
-- =========================

create policy "Authenticated users can read reviews"
on public.reviews
for select
to authenticated
using (true);

create policy "Customers can create own reviews"
on public.reviews
for insert
to authenticated
with check (
  customer_id = auth.uid()
  and exists (
    select 1
    from public.jobs j
    where j.id = reviews.job_id
      and j.customer_id = auth.uid()
      and j.status = 'completed'
  )
);

-- =========================
-- reports
-- =========================

create policy "Users can read reports they are involved in"
on public.reports
for select
to authenticated
using (
  public.is_admin()
  or reporter_id = auth.uid()
  or reported_user_id = auth.uid()
);

create policy "Users can create own reports"
on public.reports
for insert
to authenticated
with check (reporter_id = auth.uid());

create policy "Admins can update reports"
on public.reports
for update
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- =========================
-- admin_actions
-- =========================

create policy "Admins can read admin actions"
on public.admin_actions
for select
to authenticated
using (public.is_admin());

create policy "Admins can create admin actions"
on public.admin_actions
for insert
to authenticated
with check (public.is_admin());