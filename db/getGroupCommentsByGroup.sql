select * from group_comments 
join users on group_comments.user_id = users.user_id
where group_id = $1;