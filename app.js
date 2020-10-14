// Basic Import Section
const express = require('express');
const app = express();

//Middleware
app.use(express.json());

// Modular Imports
const {register} =  require('./controllers/clientController');
const {showClients} =  require('./controllers/clientController');

// DB Connection
const dbconnect = require('./config/dbconnect');
dbconnect();

//ACTIONS
//Client actions
app.get('/client/showAll', showClients);
app.post('/client/register', register);

// Port Listen
app.listen(3000, () => console.log('Server running.'))