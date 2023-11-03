

const Feedback = require('../../models/feedback.model')

module.exports = (req, res) => {
    if (!req.body.email) res.send({ error: "Required input missing" })
    const { name, email, phonenumber, message } = req.body
    const feedback = new Feedback({
        name, email, phonenumber, message
    })

    feedback.save().then(data => {
        res.send(data)
    }).catch(err => {
        res.send({ error: err.message })
    });
}