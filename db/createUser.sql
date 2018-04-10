insert into users (auth_id, username, image) values ($1, $2, $3);
select * from users where auth_id = $1;
