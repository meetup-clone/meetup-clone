insert into members
(user_id, group_id)
values
($1, $2);

select member_id ,users.image, users.username, users.user_id from members
join users on users.user_id = members.user_id
where group_id = $2
order by member_id;