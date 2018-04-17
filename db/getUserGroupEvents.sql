select groups.group_name, groups.url_name, groups.categories, events.*,
(select count(user_id) from attendees where event_id = events.event_id) as attendees
from events join groups on events.group_id = groups.group_id
where groups.group_id in (select group_id from members where user_id = $1)
order by events.start_date asc
