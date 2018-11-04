const passport = require("passport");

module.exports = app => {
  // Route handler get , put, post, patch, delete
  app.get(
    "/",
    passport.authenticate("twitter", { failureRedirect: "/login" }),
    (req, res) => {
      res.send({ message: "You are signedIn" });
    }
  );
};
