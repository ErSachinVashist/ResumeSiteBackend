module.exports = (collName, req, res) => {
    const collection = global._db.collection('feedbacks');
    collection.insertOne(req.body, {}, function (err, data) {
        if (err) console.log(err.message)
        res.send(err ? { error: err.message } : { name: data.ops[0].name })
    })
}
