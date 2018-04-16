select *,
(select count(user_id) from members where group_id = groups.group_id) as members
from groups
