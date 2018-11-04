const express = require('express');
require('./services/passport');

const PORT = process.env.PORT || 5000;

// Create express app
const app = express();

require('./routes/authRoutes')(app);
require('./routes/homeRoutes')(app);
require('./routes/profileRoutes')(app);


// listen to port
app.listen(PORT);