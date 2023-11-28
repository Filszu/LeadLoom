select
  created_at,
  count(*) as lead_count
from
  "userLeads"
group by
  created_at


-- ----------------
select
  date_trunc('day', created_at) as date,
  count(*) as lead_count,
  sum(value) as total_value,
  status
  
from
  "userLeads"
group by
  date,
  status

select
  date_trunc('day', created_at) as date,
  count(*) as lead_count,
  sum(value) as total_value
  ,currency

  
from
  "userLeads"
group by
  date,
  currency


-- #1

select
  date_trunc('day', created_at) as date,
  count(*) as lead_count,
  sum(value) as total_value,
  "userId"
from
  "userLeads"
group by
  date,
  "userId"
  

-- #2


create view
  leads_summary as
select
  date_trunc('day', created_at) as date,
  count(*) as lead_count,
  sum(value) as total_value,
  "userId"
from
  "userLeads"
group by
  date,
  "userId";

  