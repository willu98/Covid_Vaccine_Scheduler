import React, { useContext } from 'react';
import { AppointmentContext } from '../global/Appointment-Context';
import { useHistory, useParams } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../global/CustomInput';
import BackButton from '../global/BackButton';
import './Location.css';

const Location = () => {
    const history = useHistory();
    const UID = useParams().UID;
    const [appointment, setAppointment] = useContext(AppointmentContext);

    const locationList = [{
        "key": 1,
        "hospital": "Etobicoke General Hospital",
        "address": "101 Humber College Blvd, Etobicoke ON",
        "postalCode": "M9V 1R8",
        "distance": "12km"
    },
    {
        "key": 2,
        "hospital": "William Osler Health System - Brampton Civic Hospital",
        "address": "2100 Bovaird Dr E, Brampton ON",
        "postalCode": "L6R 3J7",
        "distance": "23km"
    }
    ];

    return (
        <div className="location-center">
            <Formik
                initialValues={{
                    postalCode: '',
                }}
                validationSchema={Yup.object({
                    postalCode: Yup.string()
                        .lowercase()
                        .trim()
                        .matches(/[a-z][0-9][a-z][0-9][a-z][0-9]|[a-z][0-9][a-z]\s[0-9][a-z][0-9]/, 'Please enter a valid postal code')
                        .required('required'),
                })}
            >
                {props => (
                    <Form className="location-form">
                        <h1 className="location-h1">Select Location</h1>
                        <CustomInput className="postalcode-style" label="Postal Code:" name="postalCode" type="text" placeholder="L1H2H3" length="7" />
                        <button className="location-button">
                            {'Search'}
                        </button>
                    </Form>
                )}
            </Formik>

            {locationList.map(obj => {
                return (
                    <button className="table-button" key={obj.key} onClick={() => {
                        history.push(`/vaccines/${UID}`);
                        setAppointment({ ...appointment, hospitalID: obj.hospital, addresID: obj.address, postalCodeID: obj.postalCode });
                    }}
                    >
                        <table className = "location-table">
                            <tr >
                                <td className="column">
                                    <p className="timebooking-p">{obj.hospital}</p>
                                    <p className="timebooking-p">{obj.address}</p>
                                    <p className="timebooking-p">{obj.postalCode}</p>
                                    <p className="timebooking-p" style={{color:"black"}}>{obj.distance}</p>
                                </td>
                            </tr>
                        </table>
                    </button>
                );
            })}
            <BackButton history = {history}></BackButton>
        </div>
    )
}


export default Location;