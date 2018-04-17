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
        const { group_name, url_name, description, state, city, members, organizer, categories } = req.body
        db.createGroup([group_name, url_name, description, state, city, members, organizer, categories]).then(group => {
            db.addMember([group[0].organizer, group[0].group_id]).then(member => {
                res.status(200).send(group[0])
            })
        })
    },
    postDiscussion: (req, res) => {
        const {user_id, group_id, comment, date} = req.body
        req.app.get('db').postDiscussion([user_id, group_id, comment, date]).then(discussions => {
            res.status(200).send(discussions)
        })
    }
    
}
