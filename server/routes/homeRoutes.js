const utility = require('./../services/utility')

module.exports = app => {
  // Route handler get , put, post, patch, delete
  app.get(
    '/getfeedslist', utility.loggedIn,
    (req, res) => {
      console.log("Home page")
      res.send({
        auth: {
          user_login_done : true
        },
         message: "this is home page" 
        });
    }
  );
};
