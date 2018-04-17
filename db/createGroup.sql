insert into groups (group_name, url_name, description, state, city, members, organizer, categories)
values ($1, $2, $3, $4, $5, $6, $7, $8)
returning *
