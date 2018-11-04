const passport = require('passport');

module.exports = (app) => {
  app.get('/profile/:id?',
    passport.authenticate('twitter', { failureRedirect: '/login' }),
    (req, res) => {
      res.send({ message: 'Profile page' })
    });

}
