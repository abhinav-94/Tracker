'use strict'
const http = require('http')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const socketIo = require('socket.io')
const mongodb=require('mongodb');

var {mongoose}=require('./mongoose/mongoose');
const api=require('./routes/api.js');
const {DeliveryAgent}=require('./models/delivery-agents');

const port=3000;
const app = express()
const server = http.createServer(app)
const io = socketIo(server)

const agentsMap = new Map()
app.use(express.static(path.join(__dirname, '../public')))
app.use('/',api);
app.use(bodyParser.json());


io.on('connection', socket => {

  socket.on('updateLocation', pos => {
    agentsMap.set(socket.id, pos)
  })

  socket.on('requestLocations', (email) => {

    DeliveryAgent.findOne({ customerEmail: email }, function (err, agent) {
        if(err)
        console.log(err);
        else {
          socket.emit('locationsUpdate', [ [ socket.id,
            { lat: agent.latitude, lng: agent.longitude } ] ]);
        }
    });
  })

  socket.on('disconnect', () => {
    agentsMap.delete(socket.id)
  })
})

server.listen(port, err => {
  if (err) {
    throw err
  }

  console.log('server started on port 3000')
})
