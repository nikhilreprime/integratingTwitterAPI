const express = require('express');
const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const PORT = process.env.PORT || 5000;

passport.use(new TwitterStrategy({
  consumerKey: process.env.CONSUMER_KEY,
  consumerSecret: process.env.CONSUMER_SECRET,
  callbackURL: `https://twitter-api-integration.herokuapp.com:${PORT}/login/twitter/return`
},
function(token, tokenSecret, profile, cb) {
  // User.findOrCreate({ twitterId: profile.id }, function (err, user) {
  //   return cb(err, user);
  // });
  return cb(null, profile);
}));

// Configure Passport authenticated session persistence.
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


// Create express app
const app = express();



// Route handler get , put, post, patch, delete
app.get('/', (req, res) =>{
  res.send({ hi : 'there'})
});

app.get('/auth/twitter',
  passport.authenticate('twitter'));

app.get('/auth/twitter/callback', 
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);

// listen to port
app.listen(PORT);