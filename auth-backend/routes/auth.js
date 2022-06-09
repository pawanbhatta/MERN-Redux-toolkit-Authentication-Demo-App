const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Validation Imports
const { registerValidation, loginValidation } = require("../validation");
// const { route } = require("../../EXPRESS-API/routes/posts");

const router = express.Router();

router.post("/register", async (req, res) => {
  // Validating the data
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Checking for duplicate emails
  const emailExist = await User.findOne({
    email: req.body.email,
  });
  if (emailExist) return res.status(400).send("Email Already Exists");

  // Encrypt the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Creating a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  // Saving the user
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.send(err);
  }
});

router.post("/login", async (req, res) => {
  // Validation
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if user exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email doesn't exist");

  // Check if password is correct
  const checkPass = await bcrypt.compare(req.body.password, user.password);
  if (!checkPass) return res.status(400).send("Password didn't match");

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
});

module.exports = router;
