const utility = require('./../services/utility')

module.exports = (app) => {
  app.get('/profile/:userId',
    utility.loggedIn,
    (req, res) => {
      var userId = req.params.userId;
      res.send({ message: 'Profile page' })
    });

}
