import React from 'react';
import axios from 'axios';

import './Appointment.css';


const Appointment = props => {
    return (
        <div className="appointment-main">
            <div className="appoitment-desc">
                <h2>{props.dose} dose appointment scheduled at {props.hospital} for:</h2>
                <div className="appointment-date">{props.date}</div>
            </div>
            <button className="appointment-button1">Reschedule</button>
            <button className="appointment-button2" onClick={async () => {await axios.delete(`http://localhost:5000/api/appointments/${props.id}`)}}>Cancel</button>
        </div>
    );
};

export default Appointment;