const mongoose = require('mongoose');
const mongoose = require('mongoose');
require('dotenv').config();
// Import the mongoose library

// Load environment variables from .env file
require('dotenv').config();

// Connect to the MongoDB database using the MONGO_URI from the environment variables
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected')) // Log a success message if the connection is successful
  .catch(err => console.error('Database connection error:', err)); // Log an error message if the connection fails
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Database connection error:', err));
