select *,
(select count(user_id) from members where group_id = groups.group_id) as members
from groups 
where group_id in (select group_id from members where user_id = $1)
