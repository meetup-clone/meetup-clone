module.exports = {
    getEvents: (req, res) => {
        req.app.get('db').getEvents([req.user.user_id]).then(events => {
            res.status(200).send(events)
        })
    }
}
