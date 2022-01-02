import React, { useState, useContext } from 'react';
import { AppointmentContext } from '../global/Appointment-Context';
import { useHistory } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import './TimeBooking.css';
import BackButton from '../global/BackButton';


const TimeBooking = () => {

    const [appointment, setAppointment] = useContext(AppointmentContext);

    const [currentDate, onChangeDate] = useState(new Date());
    const appointmentDaysAndTimesDictionary =
        [{ "day": 2, "time": "10:00", "avaliability": "Unavaliable" },
        { "day": 3, "time": "11:20", "avaliability": "Avaliable" },
        { "day": 5, "time": "14:10", "avaliability": "Unavaliable" },
        { "day": 7, "time": "15:40", "avaliability": "Avaliable" },
        { "day": 11, "time": "17:30", "avaliability": "Unavaliable" }]
    const history = useHistory();


    return (
        <div className="timebooking-center">
            <div className="timebooking-main">
                <h1 className="timebooking-h1">Select Appointment Date</h1>
                <div className="date-div">
                    <div className="date-h2">Date: </div>
                    <DatePicker
                        minDate={new Date()}
                        onChange={
                            onChangeDate
                        }
                        value={currentDate}
                        className="date-calendar" />  
                
                </div>
                {currentDate === null &&(<div className = "error">Please select a date</div>)}
            </div>
            <table className="timebooking-table">
                <tbody>
                    <tr>
                        <th>
                            Time
                        </th>
                        <th>
                            Avaliablity
                        </th>
                    </tr>
                    {appointmentDaysAndTimesDictionary.map(item => {

                        if (currentDate != null && currentDate.getDate() % item.day === 0) {
                            return (
                                <tr key={item.time}>
                                    <td className="td">
                                        {item.time}
                                    </td>
                                    <td className="td">

                                        {item.avaliability === "Avaliable" ?
                                            <p className="timebooking-p" style={{ color: "green" }}>{item.avaliability}</p> :
                                            <p className="timebooking-p" style={{ color: "red" }} >{item.avaliability}</p>}

                                    </td>
                                    <td className="td">
                                        {item.avaliability === "Avaliable" ?
                                            <button className="booking-button" onClick={() => {
                                                history.push(`/confirmation`);
                                                setAppointment({ ...appointment, date: currentDate.toDateString(), time: item.time });
                                            }}>
                                                Book
                                            </button> :
                                            <button disabled>Book</button>
                                        }

                                    </td>
                                </tr>
                            );
                        }
                        return <React.Fragment key={item.time}></React.Fragment>
                    })}
                </tbody>
            </table>
            <BackButton history={history}></BackButton>

        </div>
    );
};
export default TimeBooking;