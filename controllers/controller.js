const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const Message = require("../models/message");

exports.index = (req, res) => {
  Message.find().then((messages) => {
    res.render("index", { user: req.user, messages: messages });
  });
};

exports.signup = [
  body("username", "username is required").trim().isLength({ min: 1 }).escape(),
  body("password", "password is required").trim().isLength({ min: 1 }).escape(),
  body("confirm-password").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Passwords do not match!");
    }
    return true;
  }),
  body("fullname", "fullname is required").trim().isLength({ min: 1 }).escape(),

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    bcrypt
      .hash(req.body.password, 10)
      .then((hashedPassword) => {
        const user = new User({
          username: req.body.username,
          password: hashedPassword,
          fullname: req.body.fullname,
          membership: false,
        });

        user.save().then(res.redirect("/")).catch(err)(console.log(err));
      })
      .catch((err) => {
        console.log(err);
      });
  },
];

exports.joinTheClub = [
  body("passcode", "password is required").trim().isLength({ min: 1 }).escape(),

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (req.body.passcode !== "jojo") {
      return res.status(400).json({ message: "passocde is incorrect" });
    }

    User.findByIdAndUpdate(
      req.body.user_id,
      { membership: true },
      { new: true }
    )
      .then((user) => {
        if (!user) {
          console.log("User not found");
          return res.status(404).json({ error: "User not found" });
        }

        console.log("User found:", user);
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
      });
  },
];

exports.addMessage = [
  body("title", "title is required").trim().isLength({ min: 1 }).escape(),
  body("text", "text is required").trim().isLength({ min: 1 }).escape(),

  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const message = new Message({
      title: req.body.title,
      text: req.body.text,
      fullname: req.body.fullname,
    });

    message
      .save()
      .then(res.redirect("/"))
      .catch((err) => {
        console.log(err);
      });
  },
];

exports.deleteMessage = (req, res) => {
  Message.findByIdAndDelete(req.body.message_id).then((user) => {
    console.log(user);
    res.redirect("/");
  });
};

exports.admin = [
  body("passcode", "password is required").trim().isLength({ min: 1 }).escape(),

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    if (req.body.passcode !== "raj2280") {
      return res.status(400).json({ message: "passocde is incorrect" });
    }

    User.findByIdAndUpdate(req.body.user_id, { isAdmin: true }, { new: true })
      .then((user) => {
        if (!user) {
          console.log("User not found");
          return res.status(404).json({ error: "User not found" });
        }

        console.log("User found:", user);
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
      });
  },
];
