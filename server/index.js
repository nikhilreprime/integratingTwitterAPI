require('dotenv').config();
require('./services/passport');
const express = require('express');
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)

// Create express app
const app = express();

require('./routes/authRoutes')(app);
require('./routes/homeRoutes')(app);
require('./routes/profileRoutes')(app);


// listen to port
app.listen(PORT);