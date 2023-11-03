const mongoose = require('mongoose')
const config = require('./config')

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoUrl)
        console.log("Connect to MongoDB successfully")
    } catch (error) {
        console.log("Connect failed " + error.message)
    }
}

module.exports = connectDB