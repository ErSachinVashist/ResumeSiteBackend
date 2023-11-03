const { MongoClient, ServerApiVersion } = require('mongodb');
const config = require('./config')
const client = new MongoClient(config.mongoUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

module.exports = {
    connect: (cb) => {
        client.connect(async function (err) {
            if (err) return console.log("Database failed to connect  : ", err.message)
            console.log('Database Connected : ', config.dbName);
            global._db = client.db(config.dbName);
        });
    },
    disconnect: (cb) => client.close(),
}