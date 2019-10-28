//const socketIO = require('socket.io');
// Comando para establecer la conexión
// var socket = require('')
// const express = require('express');
// const app = express();



var socket = io();


//var socket = socketIO;

var label = $('#lblNuevoTicket');



socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});

// on 'estadoActual'
socket.on('estadoActual', function(resp) {

    console.log(resp);
    label.text(resp.actual);

});



$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {

        label.text(siguienteTicket);

    });

});

// module.exports = app;