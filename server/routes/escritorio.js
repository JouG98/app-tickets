const express = require('express');
const app = express();

app.get('/escritorio', function(req, res) {

    res.json(publicPathP);
});

module.exports = app;