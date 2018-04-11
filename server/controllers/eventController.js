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
    }
}
