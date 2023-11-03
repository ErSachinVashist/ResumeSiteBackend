const mongoose = require('mongoose')
const { Schema } = mongoose

const feedbackSchema = new Schema({
    name: {
        type: String,
    },
    email: String,
    phonenumber: String,
    message: String,
}, {
    timestamps: true
})

module.exports = mongoose.model('Feedback', feedbackSchema)