insert into event_comments
(user_id, event_id, comment, date)
values
($1, $2, $3, $4);

select  event_comments.*, users.username, users.image from event_comments
join users on users.user_id = event_comments.user_id
where event_id = $2
order by comment_id