create table if not exists members (
    member_id serial primary key,
    user_id references users(user_id),
    group_id references groups(group_id)
);
