require("dotenv").config();

const express = require("express");
const path = require('path');
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI);

// Create express app
const app = express();

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require('morgan')('combined'));


// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use(require("cookie-parser")());
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);
require("./services/passport")(app);


//routes

// Always return the main index.html, so react-router render the route in the client
require("./routes/authRoutes")(app);
require("./routes/homeRoutes")(app);
require("./routes/profileRoutes")(app);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});



// listen to port
app.listen(PORT);
