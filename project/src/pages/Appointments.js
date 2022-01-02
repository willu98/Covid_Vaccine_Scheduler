import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Appointment from '../global/Appointment';
import BackButton from '../global/BackButton';
import { AppointmentContext } from '../global/Appointment-Context';
import './Appointments.css';

const Appointments = () => {
    const UID = useParams().UID;
    const [appointment, setAppointment] = useContext(AppointmentContext);
    const APPOINTMENTS = [
        {
            id: 'A1',
            date: new Date("July 3 2021 11:20"),
            dose: 'First',
            hospital:'North York General Hospital',
        },
        {
            id: 'A2',
            date: new Date("July 4 2021 10:00"),
            dose: 'Second',
            hospital:'Etobicoke General Hospital',
        }
    ];
    const history = useHistory();


    return (
        <div className="appointments-main">
            <h1 className="appointments-h1">Current Appointments</h1>
            <ul className="ul">
                <h1 className="appointment-person-info">{appointment.first} {appointment.last} here are your current appointments:</h1>
                {APPOINTMENTS.map(appointment => (
                    <Appointment
                        key={appointment.id}
                        date={appointment.date.toDateString() + " " + appointment.date.toTimeString()}
                        dose={appointment.dose}
                        hospital={appointment.hospital}
                    />
                ))}
            </ul>
            <button type="submit" className="appointments-button" onClick={() => history.push(`/locations/${UID}`)} >Book New Appointment</button>
            <BackButton history={history} routeToLogin = {true}></BackButton>
        </div>
    );
};


export default Appointments;