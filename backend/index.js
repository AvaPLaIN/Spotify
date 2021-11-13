//! IMPORTS
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

//! IMPORT ROUTES
const authRoutes = require('./routes/auth');

//! SERVER SETUP
const PORT = process.env.PORT || 8800;
dotenv.config();
const app = express();

//! MIDDLEWARE
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors({ origin: '*' }));

//! ROUTES
app.use('/api/auth', authRoutes);

//! SERVER
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}!`);
});
