select events.*, groups.group_name,
(select count(event_id) from attendees where event_id =
(select attendees.event_id from attendees where user_id = $1)) as attendees
from events
join groups on events.group_id = groups.group_id
join attendees on events.event_id = attendees.event_id
where events.event_id in (select attendees.event_id from attendees where user_id = $1)
