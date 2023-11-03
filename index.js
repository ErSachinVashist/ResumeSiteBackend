require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const connectDB = require('./dbConnect')
const router = require('./routes')
const PORT = process.env.PORT || 8080

connectDB()

app.use(cors())
app.use(express.json())
app.use('/', router);

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})