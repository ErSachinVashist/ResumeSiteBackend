module.exports = (Feedback, req, res)=> {
    Feedback.find({}).toArray((err, docs) => {
        res.send(err.message || data);
    });
}