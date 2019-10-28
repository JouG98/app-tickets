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
 let ticket = ticketControl.getUltimoTicket();


 //  socket.emit('estado', function(actual) {
 //      actual: ticket
 //  })



 //  io.on('connect', function() {
 //      console.log('Conectado al Servidor');
 //  });

 //  io.on('disconnect', function() {
 //      console.log('Desconectado del Servidor');
 //  });

 //  io.on('estadoActual', function(res) {
 //      ticket = res
 //      console.log(ticket);
 //  });



 app.get('/nuevo-ticket', function(req, res) {

     res.json(ticket);
 });
 //  app.get('/nuevo-ticket', io.emit(function(req, res) {

 //      res.json(ticket);
 //  }));



 //  app.get('https://joumaster16-sistema-tickets.herokuapp.com/nuevo-ticket', function(req, res) {

 //      res.json(ticket);

 //  });

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

 //  app.put('https://joumaster16-sistema-tickets.herokuapp.com/nuevo-ticket', function(req, res) {
 //      //  res.json(`${ultimo}+${uno} `);
 //      //  res.json(ultimo + uno)
 //      //  res.json(uno);
 //      let siguiente = ticketControl.siguiente();
 //      res.json(siguiente);


 //  });


 module.exports = app;