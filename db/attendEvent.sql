insert into attendees
(user_id, event_id)
values
($1, $2);

select attendees_id ,users.image, users.username, users.user_id from attendees
join users on users.user_id = attendees.user_id
where event_id = $2
order by attendees_id;