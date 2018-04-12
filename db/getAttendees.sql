select attendees_id ,users.image, users.username from attendees
join users on users.user_id = attendees.user_id
where event_id = $1