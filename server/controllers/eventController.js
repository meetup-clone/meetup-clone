module.exports = {
    getUserEvents: (req, res) => {
        req.app.get('db').getUserEvents([req.user.user_id]).then(userEvents => {
            res.status(200).send(userEvents)
        })
    },
    getUserGroupEvents: (req, res) => {
        req.app.get('db').getUserGroupEvents([req.user.user_id]).then(userGroupEvents => {
            res.status(200).send(userGroupEvents)
        })
    },
    getAllEvents: (req, res) => {
        req.app.get('db').getAllEvents().then(allEvents => {
            res.status(200).send(allEvents)
        })
    },
    getEvent: (req, res) => {
        req.app.get('db').getEvent([req.params.id]).then(event => {
            res.status(200).send(event)
        })
    },
    getAttendees: (req, res) => {
        req.app.get('db').getAttendees([req.params.id]).then(attendees => {
            res.status(200).send(attendees)
        })
    },
    getEventComments: (req, res) => {
        req.app.get('db').getEventComments([req.params.id]).then(comments => {
            res.status(200).send(comments)
        })
    },
    attendEvent: (req, res) => {
        req.app.get('db').attendEvent([req.user.user_id, req.body.eventId]).then(attendees => {
            res.status(200).send(attendees)
        })
    },
    cancelAttend: (req, res) => {
        req.app.get('db').cancelAttend([req.user.user_id, req.params.id]).then(attendees => {
            res.status(200).send(attendees)
        })
    },
}
