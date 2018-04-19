require('dotenv').config()
const AWS = require('aws-sdk')
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESSKEY,
    secretAccessKey: process.env.AWS_SECRETKEY,
    region: process.env.AWS_REGION
})
const S3 = new AWS.S3()
function uploadPhoto(req, res) {
    // console.log('photo in back', req.body.filename, process.env.AWS_ACCESSKEY)
    // console.log( process.env.AWS_S3_BUCKET );
    let photo = req.body,
        buf = new Buffer(photo.file.replace(/^data:image\/\w+;base64,/, ""), 'base64'),
        params = {
            Bucket: process.env.AWS_S3_BUCKET,
            Body: buf,
            Key: photo.filename,
            ContentType: photo.filetype,
            ACL: 'public-read'
        }
    console.log(buf)
    S3.upload(params, (err, data) => {
        console.log(err, data)
        let response, code
        err ? (resopnse = err, code = 500) : (response = data, code = 200)
        res.status(code).send(response)
    })
}
module.exports = function (app) {
    app.post('/api/photoUpload', uploadPhoto)
}