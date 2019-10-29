 const express = require('express');
 const app = express();
 //  const { io } = require('../server');

 //  let io = require('')

 //  var socket = io();

 //const socket = io();
 //  const { io } = require('../sockets/socket')


 const { TicketControl } = require('../classes/ticket-control');
 //  const soc = io();
 const ticketControl = new TicketControl();




 app.get('/nuevo-ticket', function(req, res) {

     let ticket = ticketControl.getUltimoTicketGrabar();
     res.json(ticket);
 });

 app.put('/nuevo-ticket', function(req, res) {
     //  res.json(`${ultimo}+${uno} `);
     //  res.json(ultimo + uno)
     //  res.json(uno);
     let siguiente = ticketControl.siguiente();
     res.json(siguiente);


 });

 //  app.put('https://joumaster16-sistema-tickets.herokuapp.com/nuevo-ticket', function(req, res) {
 //      //  res.json(`${ultimo}+${uno} `);
 //      //  res.json(ultimo + uno)
 //      //  res.json(uno);
 //      let siguiente = ticketControl.siguiente();
 //      res.json(siguiente);


 //  });


 module.exports = app;