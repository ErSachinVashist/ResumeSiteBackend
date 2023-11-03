module.exports = (Feedback, req, res) => {
    const collection = global._db.collection('feedbacks');
    collection.find({}).toArray((err, docs) => {
        if (err) console.log(err.message)
        res.send(err ? { error: err.message } : docs)
    });
}