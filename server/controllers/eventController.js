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
    postComment: (req, res) => {
        const {user_id, event_id, comment, date} = req.body
        req.app.get('db').postComment([user_id, event_id, comment, date]).then(comments => {
            res.status(200).send(comments)
        })
    },
    createEvent: (req, res) => {
        const {group_id, event_name, event_description, venue_name,
            venue_city, venue_state, venue_address, venue_directions,
            start_date, end_date, latitude, longitude} = req.body
        req.app.get('db').createEvent([group_id, event_name, event_description, venue_name,
            venue_city, venue_state, venue_address, venue_directions,
            start_date, end_date, latitude, longitude]).then(event => {
                console.log(event[0].event_id)
            req.app.get('db').attendEvent([req.user.user_id, event[0].event_id]).then(smallEvent => {
                console.log(smallEvent[0].event_id)
                res.send(200).send(smallEvent[0].event_id)
            })
        })
    }
}
