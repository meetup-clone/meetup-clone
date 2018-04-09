create table if not exits event_comments (
    comment_id serial primary key,
    user_id references users(user_id),
    event_id references events(event_id),
    comment varchar(10000),
    date varchar(500)
);
