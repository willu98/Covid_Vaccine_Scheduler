import React from 'react';

import './BackButton.css';

const BackButton = props => {
  return <button className={"back-button"} onClick={()=>{
    
    (typeof(props.routeToLogin)==='undefined'?
    props.history.goBack()
    :
    props.history.push('/'))
  }}>Back</button>;
};

export default BackButton;
