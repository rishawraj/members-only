var express = require("express");
var router = express.Router();

const controller = require("../controllers/controller");
const passport = require("passport");

/* GET home page. */

// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express", user: req.user });
// });

router.get("/", controller.index);

router.get("/signup", (req, res) => {
  res.render("signup", { title: "Sign Up" });
});
router.post("/signup", controller.signup);

router.get("/login", (req, res) => {
  res.render("login");
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

router.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

router.get("/join-the-club", (req, res) => {
  res.render("join-the-club.pug", { user: req.user });
});

router.post("/join-the-club", controller.joinTheClub);

router.get("/add-message", (req, res) => {
  res.render("addMessage", { user: req.user });
});

router.post("/add-message", controller.addMessage);

module.exports = router;
