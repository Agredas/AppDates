const DateModel = require('../models/Date');

const mongoose = require('mongoose');
const { response } = require('express');


// Crear cita

//Listado citas pendientes

// Cancelar/eliminar cita
/* const cancelledDate = async(req,res) => {
  DateModel.findByIdAndUpdate(req.params.id)
  .then((cancelledDate) => {
    if(cancelledDate){
      res.send({message: `Date succesfully cancelled.`});
    }else{
      res.status(500);
      res.send({
        message: `Date with that Id not found.`
      })
    };
  }).catch((error) =>{
    console.log('There was a problem trying to cancel the date.' + error)
  })
} */