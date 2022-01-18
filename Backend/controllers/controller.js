const res = require('express/lib/response');
const HttpError = require('../models/http-error');
const Appointment  = require('../models/appointment');

const placeHolder = [{
    uid:'0123456789',
    location:'testlocation',
    time:'testdate'
}];

const getAppointmentById = async (req, res, next) => {
    const appId = req.params.appid;

    let appointment; 
    try{
        appointment = await Appointment.findById(appId);
    }
    catch(err) {
        const error = new HttpError('Something went wrong, user cannot be found', 500);
        return next(error);
    }

    if(!appointment) {
        return next(new HttpError('User not found', 404));
    }
    res.json({appointment:appointment.toObject({getters: true})});
};


const getAppointmentsByUserId = async (req, res, next) => {
    const userId = req.params.uid;
    let appointments; 

    try {
        appointments = await Appointment.find({ uid: userId });
    } catch (err) {
        const error = new HttpError(
            'Fetching appointments failed, please try again later',
            500
        );
        return next(error);
    }

    if(!appointments || appointments.lenghth === 0) {
        return next(new HttpError('Appointments for user not found', 404));
    }

    res.json({ appointments:appointments.map(appointment => 
        appointment.toObject({ getters: true })
    )});
};

const createAppointment = async (req, res, next) => {
    const { uid, date, dose, hospital } = req.body;
    const createdAppointment = new Appointment({
        uid,
        date, 
        dose,
        hospital
    });
    console.log(createdAppointment);

    try{
        await createdAppointment.save();
    }
    catch(err){
        const error = new HttpError('Unable to book appointment, please try again', 500);
        return next(error);
    }

    res.status(201).json({appointment:createdAppointment});
};

const updateAppointment = async (req, res, next) => {
    const appId = req.params.appid;

    const { date, dose, hospital } = req.body;

    let appointment;
    try{
        appointment = await Appointment.findById(appId);
    }catch(err){
        const error = new HttpError(
            'something went wrong could not find appointment to update',
            500
        );
        return next(error);
    }

    appointment.date = date;
    appointment.dose = dose;
    appointment.hospital = hospital;
    try{
        await appointment.save();
    } catch(err){
        const error = new HttpError(
            'something went wrong could not delete appointment',
            500
        );
        return next(error);
    }
    console.log("TEST");
    res.status(200).json({message:`Appointment successfully updated`})
};

const deleteAppointment = async (req,res,next)  => {
    const appId = req.params.appid;
    console.log(appId);

    let appointment;
    try{
        appointment = await Appointment.findById(appId);
    }catch(err){
        const error = new HttpError(
            'something went wrong could not find appointment to delete',
            500
        );
        return next(error);
    }

    try{
        await appointment.remove();
    } catch(err){
        const error = new HttpError(
            'something went wrong could not delete appointment',
            500
        );
        return next(error);
    }
    res.status(200).json({message:`Appointment successfully deleted`});
};


//exports
exports.getAppointmentsByUserId = getAppointmentsByUserId;
exports.getAppointmentById = getAppointmentById;
exports.createAppointment = createAppointment;
exports.updateAppointment = updateAppointment;
exports.deleteAppointment = deleteAppointment;