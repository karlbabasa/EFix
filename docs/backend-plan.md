# E-Fix Backend Plan

## Backend choice

Use Supabase first.

Supabase will handle:
- Authentication
- Postgres database
- Private provider document storage
- Row Level Security
- Admin data access
- Future admin web app access

## Apps

### Mobile app

The Expo mobile app supports:
- Customers
- Providers
- Admin mobile access

### Future admin web app

A separate web app can be created later for:
- Provider review dashboard
- Report/dispute dashboard
- Document review
- Admin audit logs
- User moderation

Both mobile and web admin will use the same Supabase project.

## Supabase tables

Core tables:
- profiles
- provider_profiles
- provider_documents
- jobs
- offers
- reviews
- reports
- admin_actions

## Auth roles

User roles:
- customer
- provider
- admin

Provider statuses:
- pending
- approved
- rejected
- resubmission_required
- suspended

## Storage buckets

Provider documents should be stored in a private bucket.

Suggested bucket:
- provider-documents

Rules:
- Customers must never access provider legal documents.
- Providers can upload their own documents.
- Admin can review submitted documents.
- Storage paths should include provider profile id or user id.

## Security rules

Use Row Level Security.

Important rules:
- Customers can read/update their own profile.
- Providers can read/update their own provider profile.
- Providers can upload/read their own documents.
- Customers cannot access provider documents.
- Approved providers can view open jobs.
- Only approved providers can send offers.
- Customers can read offers for their own jobs.
- Admin can review provider applications and reports.
- Admin decisions should create admin_actions records.

## Mobile implementation phases

### Phase 1: Supabase setup
- Create Supabase project
- Add environment variables
- Add Supabase client
- Test connection

### Phase 2: Auth
- Sign up customer
- Sign in
- Sign out
- Session persistence
- Profile creation after sign up

### Phase 3: Provider application
- Provider profile form
- Document upload
- Pending review status

### Phase 4: Jobs and offers
- Customer posts job
- Provider views open jobs
- Provider sends offer
- Customer accepts offer

### Phase 5: Reports and admin
- Submit report
- Admin reviews provider applications
- Admin reviews reports
- Admin actions audit log

## Future custom API

Do not create a custom API yet.

Consider a custom API later for:
- Payments
- Notifications
- Complex admin actions
- Background jobs
- SMS/email sending
- Advanced audit logging