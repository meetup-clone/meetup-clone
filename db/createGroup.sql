insert into groups (group_name, url_name, description, city, state, members, organizer)
values ($1, $2, $3, $4, $5, $6, $7)
returning *
