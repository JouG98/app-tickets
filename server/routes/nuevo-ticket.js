 const express = require('express');
 const app = express();

 const { TicketControl } = require('../classes/ticket-control');

 const ticketControl = new TicketControl();

 let ticket = ticketControl.getUltimoTicket();

 app.get('/nuevo-ticket', function(req, res) {

     res.json(ticket);

 });

 //  let uno = ticketControl.siguiente();
 //  let ultimo = ticketControl.getUltimoTicket();
 //  let suma = ultimo + uno;

 app.put('/nuevo-ticket', function(req, res) {
     //  res.json(`${ultimo}+${uno} `);
     //  res.json(ultimo + uno)
     //  res.json(uno);
     let siguiente = ticketControl.siguiente();
     res.json(siguiente);


 });


 module.exports = app;