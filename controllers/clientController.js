const ClientModel = require('../models/Client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');

/* const register = (req,res) => {
  ClientModel.create(req.body)
  .then(client => res.send(client))
  .catch(error => console.log('There was a problem trying to register the client.' + error))
} */

const register = async (req,res) => {
    let regExEmail = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;

    if(!regExEmail.test(req.body.email)){
      res.send({
        message: 'The email is not valid.'
      });
      return;
    }
    try{
      req.body.password = await bcrypt.hash(req.bodypassword, 9)
      const client = await new ClientModel({
        name: req.body.name,
        usernames: req.body.username,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password
      }).save();
      res.send({
      message: 'Account succesfully created.'
      })
    }catch (error) {
    console.error(error);
    res.status(500).send({message: 'There was a problem trying to register the client.' })
  }
}

const login = async(req, res) => {
  try {
    const client = await Client.findOne({
      where:{
        email: req.body.email
      }
    })
    if(!client) {
      return res.status(400).send({
        message: 'Wrong credentials or client does not exist.'
      })
    }else{
      const isMatch = await bcrypt.compare(req.body.password, client.password);
      if(isMatch){
        res.send({
          name: client.name,
          username: client.username,
          email: client.email
        })
      }else{
        return res.status(400).send({
          message: 'Wrong credentials.'
      })
    }

    const token = jwt.sign({id: client.id }, 'elvistecmec', { expiresIn: '30d' })
    console.log(token)
    client.token = token;
    await client.save()
    res.send(client);
    }
  }catch (error){
    console.error(error);
    res.status(500).send({message: 'There was a problem trying to log in.'})
  }
}

const logout = async(req,res) => {
  try {
    const outClient = await ClientModel.findOne({token:token});
    outClient.token = null;
    outClient.save();
    res.send('See you soon.')
  } catch (error) {
    console.log(error)
    res.status(500).send({message: 'There was a problem trying to log out.'})
  }
}

const showClients = (req,res) => {
  new ClientModel.find({})
  .then(clients =>{
    res.send(clients)
  })
  .catch(error => console.log('There was an error trying to show all clients.' + error))
}

const deleteClient = async (req,res) => {
  ClientModel.findByIdAndDelete(req.body.id)
    .then((deletedClient) => {
      if(deletedClient){
        res.send({message: `Client ${deletedClient.req.body.name} ${deletedClient.req.body.surnames} with id: ${deletedClient.req.body.id} was successfully deleted.`});
      } else{
        res.status(500);
        res.send({
          message: `Client with that id not found.`
        })
      };
  }).catch( (error) => {
    console.log('There was a problem trying to delete the client.' + error)
  });
}

module.exports = {
  register,
  login,
  logout,
  showClients,
  modify,
  deleteClient
}