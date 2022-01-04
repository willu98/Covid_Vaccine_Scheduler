const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema = new mongoose.Schema({
    uid: { type:Number, required: true },
    location: { type:String, required: true },
    time: { type:String, required: true }

});

module.exports = mongoose.model('Appointment', appointmentSchema);