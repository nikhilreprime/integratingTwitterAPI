const passport = require('passport');

module.exports = (app) =>{
  app.get('/login',
  (req, res) => {
    res.send({ message: 'You are onloginPage' })
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
}

