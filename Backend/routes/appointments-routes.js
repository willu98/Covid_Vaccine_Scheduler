const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();


//getting appointments
router.get('/:appid', controller.getAppointmentById);

router.get('/user/:uid', controller.getAppointmentsByUserId);

router.post('/newapp', controller.createAppointment);

router.patch('/:appid', controller.updateAppointment);

router.delete('/:appid', controller.deleteAppointment);
module.exports = router;
