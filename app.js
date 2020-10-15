// Basic Import Section
const express = require('express');
const app = express();
/* const auth = require('./middleware/auth'); */

//Middleware
app.use(express.json());

// Modular Imports
const {register} =  require('./controllers/clientController');
const {login} = require('./controllers/clientController');
const {logout} = require('./controllers/clientController');
const {showClients} =  require('./controllers/clientController');
const {showClientId} =  require('./controllers/clientController');
const {modify} =  require('./controllers/clientController');
const {deleteClient} =  require('./controllers/clientController');

// DB Connection
const dbconnect = require('./config/dbconnect');
dbconnect();

//ACTIONS
//Client actions
app.post('/client/register', register);
app.post('/client/login', login);
app.post('/client/logout', logout);
app.get('/client/showClients', showClients);
app.get('/client/showId/:id', showClientId);
app.put('/client/modify', modify);
app.delete('/client/delete/:id', deleteClient);

// Port Listen
app.listen(3000, () => console.log('Server running.'))