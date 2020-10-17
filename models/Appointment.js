const mongoose = require('mongoose');

const AppointmentSchema = mongoose.Schema({
  date:{
    type: Date,
    required: true
  },
  status:{
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  //se tienen que llamar igual, cuando creemos la cita, lo guardara con el id
  ClientId:{
    type: String,
    required: true
  }
})

const AppointmentModel = mongoose.model('appointment',AppointmentSchema);

module.exports = AppointmentModel;
