module.exports = {
    getUserEvents: (req, res) => {
        req.app.get('db').getUserEvents([req.user.user_id]).then(events => {
            res.status(200).send(events)
        })
    },
    getAllEvents: (req, res) => {
        req.app.get('db').getAllEvents().then(events => {
            res.status(200).send(events)
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
    }
}
