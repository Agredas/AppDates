const ClientModel = require('../models/Client');

const mongoose = require('mongoose');

const register = (req,res) => {
  ClientModel.create(req.body)
  .then(client => res.send(client))
  .catch(error => console.log('There was a problem trying to register the client.' + error))
}

const showClients = (req,res) => {
  new ClientModel.find({})
  .then(clients =>{
    res.send(clients)
  })
  .catch(error => console.log('There was an error trying to show all clients.' + error))
}

module.exports = {
  register,
  showClients
}