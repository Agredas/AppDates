const router = require('express').Router();
const AppointmentController = require('../controllers/appointmentController');

router.post('/create', AppointmentController.createAppointment);
router.delete('/cancel/:id', AppointmentController.cancelAppointment);
router.get('/show', AppointmentController.showAppointments);

module.exports = router;
