create table if not exits group_comments (
    comment_id serial primary key,
    user_id integer references users(user_id),
    group_id integer references groups(group_id),
    comment varchar(10000),
    date varchar(500)
)
