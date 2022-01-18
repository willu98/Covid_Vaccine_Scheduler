import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import axios from 'axios';

import './Appointment.css';
import { AppointmentContext } from '../global/Appointment-Context';


const Appointment = props => {
    const [appointment, setAppointment] = useContext(AppointmentContext);
    const history = useHistory();

    return (
        <div className="appointment-main">
            <div className="appoitment-desc">
                <h2>{props.dose} dose appointment scheduled at {props.hospital} for:</h2>
                <div className="appointment-date">{props.date}</div>
            </div>
            <button className="appointment-button1" onClick={() => {setAppointment({ ...appointment, id:props.id, updating:true}); history.push(`/locations/${props.uid}`);}}>Reschedule</button>
            <button className="appointment-button2" onClick={async () => {await axios.delete(`http://localhost:5000/api/appointments/${props.id}`)}}>Cancel</button>
        </div>
    );
};

export default Appointment;