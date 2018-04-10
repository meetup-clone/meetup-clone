create table if not exists attendees (
    attendees_id serial primary key,
    user_id references users(user_id),
    event_id references events(event_id)
)
