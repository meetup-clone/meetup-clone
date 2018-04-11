select * from members
join users on members.user_id = users.user_id
where members.group_id = $1;