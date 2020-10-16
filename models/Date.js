const mongoose = require('mongoose');

const DateSchema = mongoose.Schema({
  date:{
    type: Date,
    required: true
  },
  status:{
    type: String,
    enum : ['Pending', 'Completed', 'Cancelled']
  },
  title: {
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  clientId:{
    type: ObjectId
  }
});

const DateModel = mongoose.model('date',DateSchema);

module.exports = DateModel;
