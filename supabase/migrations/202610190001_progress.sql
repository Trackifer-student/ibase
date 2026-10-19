create table public.user_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  revision bigint not null default 1 check (revision > 0),
  updated_at timestamptz not null default now(),
  constraint progress_object check (jsonb_typeof(data) = 'object' and octet_length(data::text) <= 2097152)
);
alter table public.user_progress enable row level security;
create policy "Read own progress" on public.user_progress for select to authenticated using ((select auth.uid()) = user_id);
-- Writes only through a CAS function: clients cannot bypass revision checks.
revoke all on public.user_progress from anon, authenticated;
grant select on public.user_progress to authenticated;
create function public.save_progress(payload jsonb, expected_revision bigint)
returns boolean language plpgsql security definer set search_path = '' as $$
declare affected integer;
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  if jsonb_typeof(payload) <> 'object' or octet_length(payload::text) > 2097152 then raise exception 'Invalid progress'; end if;
  if expected_revision = 0 then
    insert into public.user_progress(user_id, data) values (auth.uid(), payload) on conflict do nothing;
  else
    update public.user_progress set data = payload, revision = revision + 1, updated_at = now()
      where user_id = auth.uid() and revision = expected_revision;
  end if;
  get diagnostics affected = row_count;
  return affected = 1;
end;
$$;
revoke all on function public.save_progress(jsonb, bigint) from public, anon;
grant execute on function public.save_progress(jsonb, bigint) to authenticated;
