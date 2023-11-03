module.exports = {
    mongoUrl: `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOPASS}@${process.env.MONGODBCLUSTER}/${process.env.MONGODB}?retryWrites=true&w=majority`,
    dbName: process.env.MONGODB
}