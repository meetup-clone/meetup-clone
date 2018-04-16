select attendees_id ,users.image, users.username, users.user_id from attendees
join users on users.user_id = attendees.user_id
where event_id = $1
order by attendees_id