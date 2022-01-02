import React, { useContext, useState } from 'react';
import { AppointmentContext } from '../global/Appointment-Context';
import { useHistory } from 'react-router-dom';
import './Confirm.css';
import BackButton from '../global/BackButton';

const RequiredInfo = () => {

  const history = useHistory();
  const [appointment, setAppointment] = useContext(AppointmentContext);
  const [confirmed, setConfirmed] = useState(false);
  return (
    <div className="main">
      <h1 className="h1">Confirmation</h1>

      {!confirmed ? (
        <div>{appointment.first} {appointment.last}, your appointment for the {appointment.vID} vaccine to be set for <strong>{appointment.time} on {appointment.date} at {appointment.hospitalID} {appointment.addresID}, {appointment.postalCodeID}</strong><p></p>Please click the 'Confirm' button below to confirm your appointment.</div>)
        : <div>{appointment.first} {appointment.last}, You have booked your appointment for the {appointment.vID} vaccine at <strong>{appointment.time} on {appointment.date} at {appointment.hospitalID} {appointment.addresID}, {appointment.postalCodeID}</strong> <p></p></div>
      }
      <button type="submit" className="button" onClick={() => {
        if (confirmed) {
          history.push(`/appointments/${appointment.uID}`);
        }
        setConfirmed(true);
      }}>
        {confirmed ? (<span>View My Appointments</span>) : <span>Confirm</span>}
      </button>
      {!confirmed ?
        <BackButton history={history}></BackButton> :
        <button
          className="button"
          style={{ background: "blue" }}
          onClick={() => {
            history.push('/');
          }}>Book For Another Person</button>
      }
    </div>

  );
};

export default RequiredInfo;