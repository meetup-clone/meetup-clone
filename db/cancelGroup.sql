delete from members
where user_id = $1 and group_id = $2;

select * from members
join users on users.user_id = members.user_id
where members.group_id = $2
order by member_id;