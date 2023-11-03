require('dotenv').config()
const express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    app = express(),
    router = require('./routes'),
    mongoDb = require('./dbConnect'),
    PORT = process.env.PORT || 8080;

app.use(cors())
mongoDb.connect();
app.use(bodyParser.json())
app.use('/', router);

app.listen(PORT, () => console.log(`Server Started on ${PORT}`))
