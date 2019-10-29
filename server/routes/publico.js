const express = require('express');
const app = express();

const { TicketControl } = require('../classes/ticket-control');

const ticketControl = new TicketControl();


app.get('/publico', function(req, res) {

    let ticket = ticketControl.getUltimos4Grabar();
    res.json(ticket);

});
// app.get('https://joumaster16-sistema-tickets.herokuapp.com/publico', function(req, res) {

//     res.json(ticket);

// });


module.exports = app;