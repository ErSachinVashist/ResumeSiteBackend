const Feedback = require('../../models/feedback.model')

module.exports = (req, res) => {
    Feedback.find({}).then(data => {
        res.send(data)
    }).catch(err => {
        res.send({ error: err.message })
    });
}