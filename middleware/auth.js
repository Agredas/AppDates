'use strict'

const jwt = require('jsonwebtoken');
const {
  Client
} = require('../models');

const auth = async(req,res,next) => {
  try{
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token,'elvistecmec');
    const client = await Client.findOne({
      where: {token:token}
    });
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