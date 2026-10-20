-- Session-scoped fixtures; no credentials or test accounts are persisted.
begin;
do $$
declare
  user_a uuid := gen_random_uuid();
  user_b uuid := gen_random_uuid();
  visible_rows integer;
begin
  insert into auth.users(id, aud, role, raw_app_meta_data, raw_user_meta_data, created_at, updated_at)
    values (user_a, 'authenticated', 'authenticated', '{}', '{}', now(), now()),
           (user_b, 'authenticated', 'authenticated', '{}', '{}', now(), now());

  perform set_config('request.jwt.claim.sub', user_a::text, true);
  perform set_config('request.jwt.claims', json_build_object('sub',user_a,'role','authenticated')::text, true);
  set local role authenticated;
  if not public.save_progress('{"ibase-xp":"10"}', 0) then raise exception 'A initial save failed'; end if;
  if public.save_progress('{"ibase-xp":"99"}', 0) then raise exception 'Duplicate creation accepted'; end if;
  if not public.save_progress('{"ibase-xp":"20"}', 1) then raise exception 'CAS update failed'; end if;
  if public.save_progress('{"ibase-xp":"99"}', 1) then raise exception 'Stale revision accepted'; end if;
  select count(*) into visible_rows from public.user_progress;
  if visible_rows <> 1 then raise exception 'A cannot read own row'; end if;
  begin
    update public.user_progress set data='{}';
    raise exception 'Direct UPDATE unexpectedly allowed';
  exception when insufficient_privilege then null;
  end;
  begin
    delete from public.user_progress;
    raise exception 'Direct DELETE unexpectedly allowed';
  exception when insufficient_privilege then null;
  end;
  begin
    insert into public.user_progress(user_id) values(user_b);
    raise exception 'Direct INSERT unexpectedly allowed';
  exception when insufficient_privilege then null;
  end;

  perform set_config('request.jwt.claim.sub', user_b::text, true);
  perform set_config('request.jwt.claims', json_build_object('sub',user_b,'role','authenticated')::text, true);
  select count(*) into visible_rows from public.user_progress;
  if visible_rows <> 0 then raise exception 'B can read A progress'; end if;
  if not public.save_progress('{"ibase-xp":"30"}', 0) then raise exception 'B initial save failed'; end if;
  if (select data->>'ibase-xp' from public.user_progress) <> '30' then raise exception 'B ownership isolation failed'; end if;

  perform set_config('request.jwt.claim.sub', '', true);
  perform set_config('request.jwt.claims', '{"role":"authenticated"}', true);
  begin
    perform public.save_progress('{}', 0);
    raise exception 'Missing identity unexpectedly allowed';
  exception when raise_exception then
    if sqlerrm <> 'Authentication required' then raise; end if;
  end;
  reset role;
  set local role anon;
  begin
    perform count(*) from public.user_progress;
    raise exception 'Anonymous SELECT unexpectedly allowed';
  exception when insufficient_privilege then null;
  end;
  begin
    perform public.save_progress('{}', 0);
    raise exception 'Anonymous RPC unexpectedly allowed';
  exception when insufficient_privilege then null;
  end;
  reset role;
end;
$$;
rollback;
