const dbconnect = () => {
  Mongoose.connect('mongodb+srv://Agredas:ZBhG52@cluster0.kuwyb.mongodb.net/dentalClinic?retryWrites=true&w=majority',{ //Link Atlas MongoDB
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => console.log('Sucessfully conected to MongoDB.'))
.catch(console.error)
} 

module.exports = mongoose;
