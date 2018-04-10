create table if not exists users (
    user_id serial primary key,
    auth_id varchar(200) not null,
    username varchar(200) not null,
    image varchar(500),
    state varchar(100),
    city varchar(100),
    category varchar(100)
)
