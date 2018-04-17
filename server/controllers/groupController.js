module.exports = {
    getUserGroups: (req, res) => {
        req.app.get('db').getUserGroups([req.user.user_id]).then(groups => {
            res.status(200).send(groups)
        })
    },
    getAllGroups: (req, res) => {
        req.app.get('db').getAllGroups().then(groups => {
            res.status(200).send(groups)
        })
    },
    getGroupByGroup: (req, res) => {
        const db = req.app.get('db')
        const { params } = req
        db.getGroupByGroup([params.id]).then(group => {
            db.getEventsByGroup([group[0].group_id]).then(events => {
                db.getAttendeesByGroup([group[0].group_id]).then(attendees => {
                    db.getGroupCommentsByGroup([group[0].group_id]).then(groupComments => {
                        db.getMembersByGroup([group[0].group_id]).then(members => {
                            let data = { group: group[0], events: events, groupComments: groupComments, members, attendees: attendees }
                            res.status(200).send(data)
                        })
                    })
                })
            })
        })
    },
    createGroup: (req, res) => {
        const db = req.app.get('db')
        req.body.organizer = req.user.user_id
        const { group_name, url_name, description, state, city, members, organizer } = req.body
        db.createGroup([group_name, url_name, description, state, city, members, organizer]).then(group => {
            db.addMember([group[0].organizer, group[0].group_id]).then(member => {
                res.status(200).send(group[0])
            })
        })
    }
}
