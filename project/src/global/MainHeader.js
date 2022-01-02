import React from 'react';

import './MainHeader.css';

const MainHeader = props => {
  return <header className={["main-header", "title"].join(" ")}><h1>COVID-19 Vaccine Booking</h1></header>;
};

export default MainHeader;
