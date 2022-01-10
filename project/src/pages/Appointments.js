import React, { useContext, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

import Appointment from '../global/Appointment';
import BackButton from '../global/BackButton';
import { AppointmentContext } from '../global/Appointment-Context';
import './Appointments.css';



const Appointments = () => {
    const UID = useParams().UID;

    const [loadedAppointments, setLoadedAppointments] = useState();

    const [appointment, setAppointment] = useContext(AppointmentContext);


    useEffect(() => {
        const getAppointments = async () => {
          try {
            const responseData = await axios.get(`http://localhost:5000/api/appointments/user/${UID}`);
            setLoadedAppointments(responseData.data.appointments);
          } catch (err) {}
        };
        getAppointments();
    });

    const history = useHistory();


    return (
        <div className="appointments-main">
            <h1 className="appointments-h1">Current Appointments</h1>
            <ul className="ul">
                {loadedAppointments && loadedAppointments.length > 0 ? 
                    <>
                        <h1 className="appointment-person-info">{appointment.first} {appointment.last} here are your current appointments:</h1>
                        {loadedAppointments.map(appointment => (                    
                            <Appointment
                                id={appointment.id}
                                key={appointment.id}
                                date={new Date(appointment.date).toDateString() + " " + new Date(appointment.date).toTimeString()}
                                dose={appointment.dose}
                                hospital={appointment.hospital}
                            />
                        ))}
                    </>:
                    <h1 className="appointment-person-info">You currently have no appointments booked, to book an appointment, click the button below.</h1>
                }
            </ul>
            <button type="submit" className="appointments-button" onClick={() => history.push(`/locations/${UID}`)} >Book New Appointment</button>
            <BackButton history={history} routeToLogin = {true}></BackButton>
        </div>
    );
};


export default Appointments;