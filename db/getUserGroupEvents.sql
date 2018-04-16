select groups.group_name, groups.url_name, events.*
from events join groups on events.group_id = groups.group_id
where groups.group_id in (select group_id from members where user_id = $1)
