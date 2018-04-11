create table if not exists attendees (
    attendees_id serial primary key,
    user_id integer references users(user_id),
    event_id integer references events(event_id)
)
