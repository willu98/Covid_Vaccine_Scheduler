import React from 'react';
import { useField } from 'formik';

import './CustomInput.css';

const CustomInput = ({ label, ...props}) => {
    const [field, meta] = useField(props);
  
    return (
      <>
        <label className="login-label" htmlFor={props.id || props.name}>{label}</label>
        <input className="login-input" {...field} {...props} maxLength = {props.length} />
        {meta.touched && meta.error ? (
          <div className="login-error">{meta.error}</div>
        ): null}
      </>
    )
};

export default CustomInput;