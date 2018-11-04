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
