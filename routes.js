const express = require('express'),
    router = express.Router(),
    addFeedback = require('./methods/feedbacks/addFeedback'),
    getFeedback = require('./methods/feedbacks/getFeedbacks');

router.use('/api/:type', (req, res, next) => {
    if (req.params.type !== 'feedbacks') {
        return res.json({ error: 'Unknown API endpoint' })
    }
    return next()
});

router.get('/api/feedbacks', getFeedback)
router.post('/api/feedbacks', addFeedback)
module.exports = router;