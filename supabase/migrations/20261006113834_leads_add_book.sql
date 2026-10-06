alter table public.leads add column if not exists book text;
update public.leads set book = 'Тетрадь в клетку' where book is null;
