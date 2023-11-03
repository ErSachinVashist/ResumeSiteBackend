module.exports = (req, res) => {
    const collection = global._db.collection('feedbacks');
    if (!req.body.email) res.send({ error: "Required input missing" })
    collection.insertOne(req.body, {}, function (err, data) {
        if (err) console.log(err.message)
        res.send(err ? { error: err.message } : { name: data.ops[0].name })
    })
}
