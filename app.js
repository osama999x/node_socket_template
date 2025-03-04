// app.js
const path = require('path');
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
require('dotenv').config();
const app = express();
const version = process.env.VERSION;
const sendResponse = require('./src/utils/sendResponse');
const apiLogMiddleware = require('./src/middleware/apiLogMiddleWare');
//Routes Imports
//requiring db connection
require('./src/config/database');

// Use CORS middleware
app.use(cors());

//Morgan request logger
app.use(logger('dev'));

//use JSON parser
app.use(express.json({ limit: '16mb' }));

//static path
app.use(express.static(path.join(__dirname, 'public')));

// use Encryption middleware
if (process.env.ENV !== 'dev') {
    // app.use(encryptionMiddleware);
    app.use(apiLogMiddleware);
}

// Define routes
app.get('/', (req, res) => {
    res.send({ message: 'Rishta-Nagar-api Server...' });
});


app.use(async (req, res, next) => {
    await sendResponse(
        res,
        responseStatusCodes.NOTFOUND,
        'Not Found',
        null,
        req.logId
    );

    return;
});

//error handler
app.use(async (err, req, res, next) => {
    console.log(err);
    await sendResponse(
        res,
        responseStatusCodes.SERVER,
        err.message,
        null,
        req.logId
    );
});
// Export the app
module.exports = app;