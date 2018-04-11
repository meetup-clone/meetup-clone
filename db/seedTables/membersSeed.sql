create table if not exists members (
    member_id serial primary key,
    user_id integer references users(user_id),
    group_id integer references groups(group_id)
)
