const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
var GoogleStrategy = require('passport-google-oauth20').Strategy;

const PORT = process.env.PORT || 5000;


passport.use(new TwitterStrategy({
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  callbackURL: `/auth/twitter/callback`
},
  function (token, tokenSecret, profile, cb) {
    // User.findOrCreate({ twitterId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    // store token ,  token secrete, twitter profile Id
    return cb(null, profile);
  }));

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: `/auth/google/callback`
},
  function (accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    return cb(null, profile);
  }
));


// Configure Passport authenticated session persistence.
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

// Initialize Passport and restore authentication state, if any, from the
// session.
module.exports = app => {
  app.use(passport.initialize());
  app.use(passport.session());
};