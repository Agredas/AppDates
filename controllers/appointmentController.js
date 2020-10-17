const AppointmentModel = require('../models/Appointment');

const mongoose = require('mongoose');
const { response } = require('express');


// Crear cita

//Listado citas pendientes

// Cancelar/eliminar cita
/* const cancelledAppointment = async(req,res) => {
  AppointmentModel.findByIdAndUpdate(req.params.id)
  .then((cancelledAppointment) => {
    if(cancelledAppointment){
      res.send({message: `Appointment succesfully cancelled.`});
    }else{
      res.status(500);
      res.send({
        message: `Appointment with that Id not found.`
      })
    };
  }).catch((error) =>{
    console.log('There was a problem trying to cancel the appointment.' + error)
  })
} */