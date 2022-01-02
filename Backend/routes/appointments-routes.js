const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();


//getting appointments
router.get('/:uid', controller.getAppointments);

router.post('/test', controller.createAppointment);

router.patch('/:uid', controller.updateAppointment);

router.delete('/:uid', controller.deleteAppointment);
module.exports = router;
