insert into events
(group_id, event_name, event_description, venue_name,
venue_city, venue_state, venue_address, venue_directions,
start_date, end_date, latitude, longitude)
values
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
returning *