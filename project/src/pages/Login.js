import React, { useContext } from 'react';
import { AppointmentContext } from '../global/Appointment-Context';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../global/CustomInput';
import './Login.css';

const Login = () => {

  const history = useHistory();
  const [appointment, setAppointment] = useContext(AppointmentContext);

  const formik =
    <Formik
      initialValues={{
        first: '',
        last: '',
        versionCode: '',
        ohipNum: '',
      }}
      validationSchema={Yup.object({
        first: Yup.string()
          .matches(/^[a-zA-Z]+$/, 'English characters only')
          .required('required'),
        last: Yup.string()
          .matches(/^[a-zA-Z]+$/, 'English characters only')
          .required('required'),
        versionCode: Yup.string()
          .lowercase()
          .matches(/[a-z][a-z]/, 'Must be only 2 characters long and only letters')
          .required('required'),
        ohipNum: Yup.string()
          .matches(/^[0-9]{10}$/, 'Must be 10 digits')
          .required('required'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setAppointment({ ...appointment, uID: values.ohipNum, first: values.first, last: values.last });
        history.push(`/appointments/${values.ohipNum}`);
      }}
    >
      {props => (
        <Form className="login-form">
          <h1 className="login-h1">Login</h1>
          <CustomInput label="First Name" name="first" type="text" />
          <CustomInput label="Last Name" name="last" type="text" />
          <CustomInput label="Health Card Type ?" name="versionCode" type="text" length="2" />
          <CustomInput label="Health Card Number ?" name="ohipNum" type="text" length="10" />
          <button className="login-button" type="submit">
            {props.isSubmitting ? 'Loading...' : 'Submit'}
          </button>
        </Form>
      )}
    </Formik>;

  return (formik);
};

export default Login;