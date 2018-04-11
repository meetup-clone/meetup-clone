module.exports = {
    getEvents: (req, res) => {
        req.app.get('db').getUserEvents([req.user.user_id]).then(events => {
            res.status(200).send(events)
        })
    }
}
