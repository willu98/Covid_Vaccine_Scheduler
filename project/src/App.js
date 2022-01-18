import React,{ useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Login from './pages/Login';
import Location from './pages/Location';
import Appointments from './pages/Appointments';
import TimeBooking from './pages/TimeBooking';
import Vaccines from './pages/Vaccines';
import MainHeader from './global/MainHeader';
import Footer from './global/Footer';
import Confirm from './pages/Confirm';
import { AppointmentContext } from './global/Appointment-Context';


const App = () => {

  const [appointment, setAppointment] = useState({
    first:"",
    last:"",
    uID:"",
    hospitalID:"",
    addressID:"",
    postalCodeID:"",
    vID:"",
    date:"",
    time:"",
    id:"",
    updating:false
  });

  let routes = (
    <Switch>
      <Route path="/" exact>
        <Login/>
      </Route>
      <Route path="/appointments/:UID" exact>
        <Appointments/>
      </Route>
      <Route path="/locations/:UID" exact>
        <Location/>
      </Route>
      <Route path="/vaccines/:UID" exact>
        <Vaccines/>
      </Route>            
      <Route path="/timebooking" exact>
        <TimeBooking/>
      </Route>
      <Route path="/confirmation" exact>
        <Confirm/>
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <AppointmentContext.Provider
      value={[appointment, setAppointment]}
    >
      <Router>
        <MainHeader />
        <main>{routes}</main>
        
        {/*<Footer/>*/}
      </Router>
    </AppointmentContext.Provider>  
  );
}

export default App;
