import React from 'react';
import './Appointment.css';

const Appointment = props => {
    return (
        <div className="appointment-main">
            <div className="appoitment-desc">
                <h2>{props.dose} dose appointment scheduled at {props.hospital} for:</h2>
                <div className="appointment-date">{props.date}</div>
            </div>
            <button className="appointment-button1">Reschedule</button>
            <button className="appointment-button2">Cancel</button>
        </div>
    );
};

export default Appointment;