// Basic Import Section
const express = require('express');
const app = express();
const auth = require('./middleware/auth');
const cors = require('./middleware/cors');

const ClientsRouter = require('./routers/clientRouter');
const AppointmentsRouter = require('./routers/appointmentRouter');

const PORT = process.env.PORT || 3001;
//Middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT,OPTIONS, DELETE");
  next();
});
app.use(express.json());


// DB Connection
const dbconnect = require('./config/dbconnect');
dbconnect();

app.use('/client', ClientsRouter);
app.use('/appointment', auth, AppointmentsRouter);

// Port Listen
app.listen(PORT, () => console.log('Server running on port ' + PORT + '.'))