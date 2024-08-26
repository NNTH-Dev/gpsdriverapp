const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const customResourceResponse = require('./utils/constants');
const db = require('./config/database');
const authRoutes = require('./routes/auth');


const app = express();
app.use(bodyParser.json());

mongoose.connect(db.gpsMongoURI, {
})
.then(() => console.log('Mongo Db Connected !'))
.catch((err) => console.log(err));

app.use('/', authRoutes);

app.use((req, res) => {
  res.status(404).send({
    message: 'The requested URL could not be found.',
    statusCode: 404,
  });
});

app.use((error, req, res, next) => {
    const { message } = customResourceResponse.serverError;
    const data = {
        Code: `${error.code ? error.code : ''}`,
        Stacktrace: `${error.stack}`
    };
    res.status(500).json({ message, data });
});

const port = 8082;

console.log(`User server started and listening on port ${port}`);

app.listen(port);
