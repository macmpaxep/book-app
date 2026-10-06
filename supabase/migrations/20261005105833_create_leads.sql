create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  source text,
  page text,
  tg_status text not null default 'pending' check (tg_status in ('pending', 'sent', 'failed')),
  tg_error text
);

-- RLS on with no policies: the public anon/authenticated keys cannot read or write.
-- Only the Edge Function (service role) and the dashboard can access this table.
alter table public.leads enable row level security;

create index if not exists leads_created_at_idx on public.leads (created_at desc);
