select * from attendees
join users on attendees.user_id = users.user_id
where attendees.event_id in(1, 3, 6)
order by attendees.event_id;