const jwt = require('jsonwebtoken');
const ClientModel = require('../models/Client');

const auth = async(req,res,next) => {
  try{
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token,'elvistecmec');
    const client = await ClientModel.findOne({token:token});
    console.log(client)
    if(!client){
      return res.status(401).send({message: 'You are not authorized.'})
    }
    req.client = client;
    next();
  } catch (error){
    console.error(error)
    res.status(401).send({error, message: 'You are not authorized.'})
  }
}

module.exports = auth;