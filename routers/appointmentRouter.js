const ClientModel = require('../models/Client');


const router = require('express').Router();
const AppointmentController = require('../controllers/appointmentController');
const adminReq = require('../middleware/admin');

router.post('/create', AppointmentController.createAppointment);
router.delete('/cancel/:id', AppointmentController.cancelAppointment);
router.get('/show', AppointmentController.showAppointments);
router.get('/showAll', adminReq, AppointmentController.showAllAppointments);

module.exports = router;
