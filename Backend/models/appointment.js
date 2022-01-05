const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema = new mongoose.Schema({
    uid: { type:String, required: true },
    date: { type:String, required: true },
    dose: { type:String, required: true },
    hospital: { type:String, required: true }

});

module.exports = mongoose.model('Appointment', appointmentSchema);