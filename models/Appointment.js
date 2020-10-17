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
  tokenClient:{
    type: String,
    required: true
  }
})

const AppointmentModel = mongoose.model('appointment',AppointmentSchema);

module.exports = AppointmentModel;
