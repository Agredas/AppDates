const AppointmentModel = require('../models/Appointment');
const ClientModel = require('../models/Client');

const createAppointment = async(req,res) =>{
  let client = await ClientModel.findOne({
    email: req.params.email
  });
  if(!client.token){
    res.status(400).send({
      message: 'If you want to create an appointment, you need to be loged.'
    })
  }else{
    try{
      const appointment = await AppointmentModel({
        date: req.body.date,
        status: req.body.status,
        title: req.body.title,
        description: req.body.description,
        tokenClient: client.tokenClient
      }).save();
      res.send({
        message: `Appointment succesfully created for the date ${appointment.date}`
      })
    }catch (error) {
      console.log(error)
      res.status(500).send({
        message: 'There was a problem trying to create an appointment.' + error
      })
    }
  }
}


const cancelAppointment = async(req,res) => { 
  try {
  const appointment = await AppointmentModel.findByIdAndDelete({ 
  })
    res.send({message: `Appointment succesfully deleted.`})
  }catch(error){
    console.error(error);
      res.status(500).send({
        message: `There was a problem trying to cancel the appointment.`
      })
    }
  }

const showAppointments = async(req,res) =>{
  try{
    const appointment = await AppointmentModel.find({
      tokenClient: req.params.tokenClient
    })
    res.send({appointment})
  } catch (error){
    console.error(error);
    res.status(500).send({
      message: 'There was a problem trying to show all the appointments.'
    })
  }
}


module.exports = {
  createAppointment,
  cancelAppointment,
  showAppointments
}