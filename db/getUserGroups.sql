select * from groups 
where group_id in (select group_id from members where user_id = $1)
