const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app);

const { TicketControl } = require('../server/classes/ticket-control');
const io = socketIO();

const publicPath = path.resolve(__dirname, '../public');
// const publicPathP = path.resolve(__dirname, '../public/publico');
// const publicPathE = path.resolve(__dirname, '../public/escritorio');
// const publicPathT = path.resolve(__dirname, '../public/nuevo-ticket.html');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// app.use(require('../public/routes/nuevo-ticket'))

// app.use(require('../public/js/socket.nuevo-ticket'))

app.use(require('./routes/escritorio'));

app.use(require('./routes/nuevo-ticket'));
//app.use(require('../public/js/socket.nuevo-ticket'));

app.use(require('./routes/publico'));
//app.use(require('./config/config'));
///=================================
///=================================
///=================================

io.on('connection', (client) => {
    console.log('Connet server');
})

app.get('/nuevo-ticket', function(req, res) {

})

// var label = $('#lblNuevoTicket');

// app.get('/nuevo-ticket', function(req, res) {

//     //res.emit(publicPathT);

// });




// IO = esta es la comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket');





server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);


    // console.log(`Ruta ${publicPath}`);

});