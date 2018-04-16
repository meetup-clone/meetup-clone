select groups.group_name, groups.url_name, events.*
from events join groups on events.group_id = groups.group_id
where events.event_id in (select event_id from attendees where user_id = $1)
