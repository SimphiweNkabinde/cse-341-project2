const config = require("../../config/env");
const router = require("express").Router();
const passport = require("passport");
const User = require("../models/user");
const userService = require("../services/user");
const GitHubStrategy = require("passport-github2").Strategy;

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

passport.use(
  new GitHubStrategy(
    {
      clientID: config.authProvider.github.clientID,
      clientSecret: config.authProvider.github.clientSecret,
      callbackURL: config.authProvider.github.callbackURL,
    },
    function (accessToken, refreshToken, profile, done) {
      userService.findOrCreate(profile, (err, user) => {
        done(err, user);
      });
    },
  ),
);

router.get("/login", passport.authenticate("github"));
router.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    return res.redirect("/");
  });
});
router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/api-docs",
    session: false,
  }),
  function (req, res) {
    req.session.user = req.user;
    res.redirect("/");
  },
);

module.exports = router;
