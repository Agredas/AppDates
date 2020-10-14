const dbconnect = () => {
   
  const mongoose = require('mongoose');
  const url = 'mongodb+srv://Agredas:ZBhG52!@cluster0.kuwyb.mongodb.net/dentalClinic?retryWrites=true&w=majority';
  
  mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('Sucessfully conected to MongoDB.'))
  .catch(error => 
    console.log('There was an error trying to connect to the DB.' + error));
} 

module.exports = dbconnect;
