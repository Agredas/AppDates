const AppointmentModel = require('../models/Appointment');
const ClientModel = require('../models/Client');

const createAppointment = async(req,res) =>{
    try{
      const appointment = await AppointmentModel({
        ClientId: req.client._id,
        date: req.body.date,
        status: req.body.status,
        title: req.body.title,
        description: req.body.description,
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


const cancelAppointment = async(req,res) => { 
  try { 
  const appointment = await AppointmentModel.findByIdAndDelete({ _id: req.params.id
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
      ClientId: req.client.id
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