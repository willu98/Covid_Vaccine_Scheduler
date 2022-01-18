const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const axios = require('axios');

const router = express.Router();
const cors = require('cors');

const appointmentsRoutes = require('./routes/appointments-routes');
const locationRoutes = require('./routes/locations-routes');

const HttpError = require('./models/http-error');

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());


app.use('/api/appointments',appointmentsRoutes);

app.use('/api/hospitals', router.get('/:postcode',  async (req, res, next) => {
    let postalCode = req.params.postcode;
    const {data} = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${postalCode}&type=restaurant&key=${process.env.GOOGLE_API_KEY}`);
    res.json(data);
}));

//unsupported routes
app.use((req, res, next) => {
    const error = new HttpError('Route is unsupported', 404);
    return next(error);
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

try{
    mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.26uff.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
    app.listen(5000);
} catch(err) {
    console.log(err);
}
//module.exports.handler = serverless(app);

