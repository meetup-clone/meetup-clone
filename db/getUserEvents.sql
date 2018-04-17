select groups.group_name, groups.url_name, groups.category, events.*,
(select count(user_id) from attendees where event_id = events.event_id) as attendees
from events join groups on events.group_id = groups.group_id
where events.event_id in (select event_id from attendees where user_id = $1)
order by events.start_date asc
