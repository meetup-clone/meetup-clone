select events.event_id, groups.group_id, users.user_id, users.image
from events join groups
on events.group_id = groups.group_id
join attendees on events.event_id = attendees.event_id
join users on users.user_id = attendees.user_id
where groups.group_id = 1
order by events.event_id;