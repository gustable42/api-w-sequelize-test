const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));
app.use('/customers', require('./routes/customer.route'));
app.use('/appointments', require('./routes/appointment.route'));

app.listen(3000);