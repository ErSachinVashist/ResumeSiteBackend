const express = require('express'),
    fs = require("fs"),
    path = require('path'),
    router = express.Router(),
    forEach = require('foreach');

let methods = {};

fs.readdirSync(__dirname).forEach(function (file) {
    if (file === 'index.js') return;
    methods[file.replace('.js', '')] = require(path.join(__dirname, file));
});

router.use('/api/:type', (req, res, next) => {
    console.log("req.params>>>", req.params, methods)
    if (!methods[req.params.type]) {
        return res.json({ error: 'Unknown API endpoint' })
    }
    return next()
});

forEach(Object.keys(methods), (key) => {
    forEach(methods[key], (route) => {
        router[route.type](`/api/${key}`, (req, res) => {
            return route.method(key, req, res)
        })
    })
})

module.exports = router;