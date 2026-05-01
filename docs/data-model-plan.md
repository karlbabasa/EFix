# E-Fix Data Model Plan

## 1. users

Stores the app profile for every account.

Fields:
- id
- full_name
- email
- mobile_number
- role: customer | provider | admin
- created_at
- updated_at

Notes:
- This is not the password table.
- If using Supabase later, auth credentials should be handled by Supabase Auth.
- This table stores app-specific profile data only.

---

## 2. provider_profiles

Stores provider application and provider service details.

Fields:
- id
- user_id
- main_service
- service_area
- experience
- description
- status: pending | approved | rejected | resubmission_required | suspended
- admin_notes
- reviewed_by
- reviewed_at
- created_at
- updated_at

Rules:
- A provider cannot accept real jobs unless status is approved.
- A provider can submit/resubmit documents while pending or resubmission_required.
- Admin should record notes when approving, rejecting, or requesting resubmission.

---

## 3. provider_documents

Stores metadata for submitted provider documents.

Fields:
- id
- provider_profile_id
- document_type: government_id | selfie_with_id | clearance | proof_of_address | skill_certificate
- file_url
- status: uploaded | approved | rejected | resubmission_required
- admin_notes
- uploaded_at
- reviewed_at

Rules:
- Customers must never see provider document files.
- Only provider owner and admin should access document metadata.
- Only admin should review/approve/reject documents.
- File storage should be private.

---

## 4. jobs

Stores customer job requests.

Fields:
- id
- customer_id
- title
- category
- description
- location
- preferred_schedule
- budget_min
- budget_max
- status: open | offer_accepted | in_progress | completed | cancelled | disputed
- accepted_offer_id
- created_at
- updated_at

Rules:
- Customer owns the job.
- Approved providers can view open jobs.
- Customer can cancel only before an offer is accepted.
- Customer can mark completed only after accepted/in_progress.

---

## 5. offers

Stores provider offers for jobs.

Fields:
- id
- job_id
- provider_id
- price
- estimated_time
- message
- status: pending | accepted | rejected | withdrawn
- created_at
- updated_at

Rules:
- Only approved providers can create offers.
- Provider can only edit/withdraw their own pending offer.
- Customer can accept one offer for their own job.
- Accepting one offer should reject other pending offers.

---

## 6. reviews

Stores customer ratings for providers.

Fields:
- id
- job_id
- customer_id
- provider_id
- rating
- comment
- created_at

Rules:
- Customer can review only after job is completed.
- One review per completed job.
- Rating should be 1 to 5.

---

## 7. reports

Stores safety reports and disputes.

Fields:
- id
- job_id
- reporter_id
- reported_user_id
- reason
- details
- status: open | reviewing | resolved | dismissed
- admin_notes
- resolved_by
- resolved_at
- created_at
- updated_at

Rules:
- Customer or provider can report a job/user.
- Admin reviews and resolves/dismisses reports.
- Serious reports can lead to warning, suspension, or ban.

---

## 8. admin_actions

Stores audit trail of admin decisions.

Fields:
- id
- admin_id
- target_user_id
- target_type: provider_application | provider_document | report | job | user
- target_id
- action: approve | reject | request_resubmission | resolve | dismiss | warn | suspend | ban
- notes
- created_at

Rules:
- Every major admin decision should create an admin action record.
- Admin actions should not be editable by normal users.

---

## Role access plan

Public:
- Landing
- Role selection
- Sign in
- Registration/application screens

Customer:
- Own profile
- Own jobs
- Offers on own jobs
- Own reports
- Own reviews

Provider:
- Own profile
- Own documents
- Open jobs if approved
- Own offers
- Reports involving own jobs

Admin:
- Provider applications
- Provider documents
- All reports
- Admin actions
- User moderation

---

## Important security notes

- Enable Row Level Security when using Supabase.
- Keep provider documents private.
- Do not expose admin routes in public UI.
- Do not allow providers to send offers unless approved.
- Do not allow customers to access provider legal documents.