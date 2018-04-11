module.exports = {
    getGroups: (req, res) => {
        req.app.get('db').getUserGroups([req.user.user_id]).then(groups => {
            res.status(200).send(groups)
        })
    },
    getGroupByGroup: (req, res) => {
        const db = req.app.get('db');
        const {params} = req;
        db.getGroupByGroup([params.id]).then(group => {
            db.getEventsByGroup([params.id]).then(events => {
                db.getGroupCommentsByGroup([params.id]).then(groupComments => {
                    db.getMembersByGroup([params.id]).then(members => {
                        let data = {group: group[0], events: events[0], groupComments: groupComments[0], members}
                        res.status(200).send(data)
                    })
                })
            })
        })
    }
}
