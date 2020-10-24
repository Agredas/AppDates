// Basic Import Section
const express = require('express');
const app = express();
const auth = require('./middleware/auth');
const cors = require('./middleware/cors');
const ClientsRouter = require('./routers/clientRouter');
const AppointmentsRouter = require('./routers/appointmentRouter');

const PORT = process.env.PORT || 3001;
//Middleware
app.use(express.json());
/* app.use(cors); */

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


// DB Connection
const dbconnect = require('./config/dbconnect');
dbconnect();

app.use('/client', ClientsRouter);
app.use('/appointment', auth, AppointmentsRouter);

// Port Listen
app.listen(PORT, () => console.log('Server running on port ' + PORT + '.'))