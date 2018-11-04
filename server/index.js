const express = require('express');
const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const PORT = process.env.PORT || 5000;

passport.use(new TwitterStrategy({
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  callbackURL: `https://twitter-api-integration.herokuapp.com:${PORT}/auth/twitter/callback`
},
  function (token, tokenSecret, profile, cb) {
    // User.findOrCreate({ twitterId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    // store token ,  token secrete, twitter profile Id
    return cb(null, profile);
  }));

// Configure Passport authenticated session persistence.
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});


// Create express app
const app = express();





// Route handler get , put, post, patch, delete
app.get('/',
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  (req, res) => {
    res.send({ message: 'You are signedIn' })
  });


// To handle twitter signin button click 
app.get('/auth/twitter',
  passport.authenticate('twitter'));

  
// To handle callback from twitter signin
app.get('/auth/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);



// listen to port
app.listen(PORT);