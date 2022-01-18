Covid_Vaccine_Scheduler


A single-page web application that allows people to book, update and delete their Covid-19 vaccines. Frontend developed in React.JS, backend developed in Node.JS and Express.JS connected to MongoDB NoSQL database.


# Features
* Login Page that utilises Formik library to handle form submission and validation
![Login](https://github.com/willu98/Covid_Vaccine_Scheduler/blob/main/Images/Login.png)

* Appointments page, retreives all appointments for a given user and provides the option to update, delete an existing appointment or book a new appointment.
![Appointment](https://github.com/willu98/Covid_Vaccine_Scheduler/blob/main/Images/appointments.png)

* Location page, allows user to select a location to receive their vaccination. 
  Eventaully plan on using google maps API to find the nearest hospital given a postal code
![Locations](https://github.com/willu98/Covid_Vaccine_Scheduler/blob/main/Images/location.png)

* Date page, allows user to select a date for their vaccine appointment using the react date picker library.
![Date](https://github.com/willu98/Covid_Vaccine_Scheduler/blob/main/Images/date.png)



[Original Frontend Repository](https://github.com/willu98/EECS3641-A4)

### To install dependencies
~~~~
npm install
~~~~

### To run 
~~~~
npm start
~~~~
