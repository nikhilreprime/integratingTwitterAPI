const passport = require('passport');

module.exports = (app) => {
  app.get('/profile/:userId',
    passport.authenticate('twitter', { failureRedirect: '/login' }),
    (req, res) => {
      var userId = req.params.userId;
      res.send({ message: 'Profile page' })
    });

}
