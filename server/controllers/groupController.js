module.exports = {
    getGroups: (req, res) => {
        req.app.get('db').getGroups([req.user.user_id]).then(groups => {
            res.status(200).send(groups)
        })
    }
}
