-- E-Fix provider document storage
-- Run this after schema.sql and rls-policies.sql.

insert into storage.buckets (id, name, public)
values ('provider-documents', 'provider-documents', false)
on conflict (id) do nothing;

-- Providers can upload files only inside their own auth.uid() folder.
-- Expected path:
-- provider-documents/{auth.uid()}/{filename}

create policy "Providers can upload own provider documents"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'provider-documents'
  and (storage.foldername(name))[1] = auth.uid()::text
);

create policy "Providers can read own provider documents"
on storage.objects
for select
to authenticated
using (
  bucket_id = 'provider-documents'
  and (storage.foldername(name))[1] = auth.uid()::text
);

create policy "Providers can update own provider documents"
on storage.objects
for update
to authenticated
using (
  bucket_id = 'provider-documents'
  and (storage.foldername(name))[1] = auth.uid()::text
)
with check (
  bucket_id = 'provider-documents'
  and (storage.foldername(name))[1] = auth.uid()::text
);

create policy "Providers can delete own provider documents"
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'provider-documents'
  and (storage.foldername(name))[1] = auth.uid()::text
);

create policy "Admins can read provider documents"
on storage.objects
for select
to authenticated
using (
  bucket_id = 'provider-documents'
  and public.is_admin()
);