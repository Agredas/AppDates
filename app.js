// Basic Import Section
const express = require('express');
const app = express();
const auth = require('./middleware/auth');
const cors = require('./middleware/cors');
const ClientsRouter = require('./routers/clientRouter');
const AppointmentsRouter = require('./routers/appointmentRouter');

const PORT = process.env.PORT || 3000;
//Middleware
app.use(express.json());
app.use(cors);


// DB Connection
const dbconnect = require('./config/dbconnect');
dbconnect();

app.use('/client', ClientsRouter);
app.use('/appointment', auth, AppointmentsRouter);

// Port Listen
app.listen(PORT, () => console.log('Server running on port ' + PORT + '.'))