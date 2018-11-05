
module.exports = {
  loggedIn: function (req, res, next) {
    if (req.user) {
      next();
    } else {
      res.send({
        auth: {
          user_login_done : false
        }
      });
    }
  }
}
