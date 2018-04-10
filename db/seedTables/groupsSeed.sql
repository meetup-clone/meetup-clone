create table if not exists groups (
    group_id serial primary key,
    group_name varchar(200) not null,
    url_name varchar(200) not null,
    description varchar(10000),
    state varchar(100), 
    city varchar(100),
    members int,
    organizer references users(user_id),
    category varchar(100)
);
