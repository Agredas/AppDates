// Basic Import Section
const express = require('express');
const app = express();

//Middleware
app.use(express.json());

// Modular Imports


// DB Connection
const dbconnect = require('./config/dbconnect');
dbconnect();

// Port Listen
app.listen(3000, () => console.log('Server running.'))