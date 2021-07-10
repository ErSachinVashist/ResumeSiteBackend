const MongoClient = require('mongodb').MongoClient;
const config=require('./config')
const client = new MongoClient(config.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = {
    connect: (cb) => {
        client.connect(function (err) {
            console.log(config)
            if(err) return console.log("Database failed to connect  : ",err.message)
            console.log('Database Connected');
            global._db=client.db(config.dbName);
            // client.close()
        });
    },
    disconnect: (cb) => client.close(),
}