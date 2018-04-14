select  event_comments.*, users.username, users.image from event_comments
join users on users.user_id = event_comments.user_id
where event_id = $1
order by comment_id