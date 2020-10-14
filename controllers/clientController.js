const ClientModel = require('../models/Client');

const mongoose = require('mongoose');

const register = (req,res) => {
  ClientModel.create(req.body)
  .then(client => res.send(client))
  .catch(error => console.log('There was a problem trying to register the client.' + error))
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
        message: 'Wrong credentials.'
      })
    }
    const isMatch = await bcrypt.compare(req.body.password, client.password)
    if (!isMatch){
      return res.status(400).send({
        message: 'Wrong credentials.'
      })
    }
    const token = jwt.sign({id: client.id }, 'elvistecmec', { expiresIn: '30d' })
    console.log(token)
    client.token = token;
    await client.save()
    res.send(client);
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

module.exports = {
  register,
  login,
  logout,
  showClients
}