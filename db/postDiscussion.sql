insert into group_comments
(user_id, group_id, comment, date)
values
($1, $2, $3, $4);

select  group_comments.*, users.username, users.image from group_comments
join users on users.user_id = group_comments.user_id
where group_id = $2
order by comment_id