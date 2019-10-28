const express = require('express');
const app = express();

const { TicketControl } = require('../classes/ticket-control');

const ticketControl = new TicketControl();

let ticket = ticketControl.getUltimos4();

app.get('/publico', function(req, res) {

    res.json(ticket);

});
app.get('https://joumaster16-sistema-tickets.herokuapp.com/publico', function(req, res) {

    res.json(ticket);

});


module.exports = app;