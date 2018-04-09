create table if not exists events (
    event_id serial primary key,
    group_id references groups(group_id),
    event_name varchar(200),
    event_description varchar(10000),
    start_date varchar(500),
    end-date varchar(500),
    venue_name varchar(200),
    venue_city varchar(200),
    venue_state varchar(200),
    venue_address varchar(500),
    venue_directions varchar(5000)
);
