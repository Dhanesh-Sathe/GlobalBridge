const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const dotenv = require('dotenv');
// const bodyParser = require('body-parser');
const connectDB = require('./config/dbConnections');
const signUpRoute = require('./routes/signUpRoute');
const companyRegistrationRoute = require('./routes/companyRegistrationRoute')
const findCompanyRoute = require('./routes/findCompanyRoute');
const userDashboardRoute = require('./routes/userDashboardRoute');

dotenv.config();

// Middleware for parsing JSON 
app.use(express.json());
express.urlencoded({ extended: true })

// Enable cors 
app.use(cors());
// app.use(bodyParser.json());

// Routes
app.use('/api', signUpRoute);
app.use('/api', companyRegistrationRoute);
app.use('/api', findCompanyRoute);
app.use('/api', userDashboardRoute);

// Connect MongoDB 
connectDB();

// Connect Port
app.listen(port, () => {
    console.log('Server is listen on port 8000');
})
