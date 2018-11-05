const utility = require('./../services/utility')

module.exports = app => {
  // Route handler get , put, post, patch, delete
  app.get(
    "/", utility.loggedIn,
    (req, res) => {
      console.log("Home page")
      res.send({ message: "this is home page" });
    }
  );
};
