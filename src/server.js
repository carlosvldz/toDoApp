const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./db');

//Set
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/tasks', require('./routes/routes.js'))

//Start server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});