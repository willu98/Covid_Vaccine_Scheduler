const express = require('express');
const bodyParser = require('body-parser');
const appointmentsRoutes = require('./routes/appointments-routes');
const HttpError = require('./models/http-error');

const app = express();
app.use(express.json());


app.use('/api/appointments',appointmentsRoutes);

//unsupported routes
app.use((req, res, next) => {
    const error = new HttpError('Route is unsupported', 404);
    throw error;
});
//order importante
app.use((error, req, res, next) => {
    //checking if a response has already been sent
    if(res.headerSent) {
        return next(error);
    }

    res.status(error.code || 500);
    res.json({message:error.message || 'unknown error occured'});
});

app.listen(5000);