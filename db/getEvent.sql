select group_name, url_name ,events.* from events
join groups on groups.group_id = events.group_id
where event_id = $1