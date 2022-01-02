const res = require('express/lib/response');
const HttpError = require('../models/http-error');

const placeHolder = [{
    uid:'0123456789',
    location:'testlocation',
    time:'testdate'
}];

const getAppointments = (req, res, next) => {
    const userId = req.params.uid;
    console.log('GET APPOINTMENTS');
    console.log(userId);
    const appointment = placeHolder.filter(a => {
        return a.uid === userId;
    });
    if(!appointment) {
        return next(new HttpError('User not found', 404));
    }

    res.json(appointment);
};

const createAppointment = (req, res, next) => {
    const { uid, location, time } = req.body;
    const createdAppointment = {
        uid, 
        location,
        time
    };

    placeHolder.push(createdAppointment);

    res.status(201).json({appointment:createdAppointment});
};

const updateAppointment = (req, res, next) => {

};

const deleteAppointment = (res,req,next)  => {

};

exports.getAppointments = getAppointments;
exports.createAppointment = createAppointment;
exports.updateAppointment = updateAppointment;
exports.deleteAppointment = deleteAppointment;