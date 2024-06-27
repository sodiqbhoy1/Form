// backend/routes/auth.js
const express = require('express'); // Importing express
const bcrypt = require('bcryptjs'); // Importing bcryptjs
const jwt = require('jsonwebtoken'); // Importing jsonwebtoken
const User = require('../models/userModel'); // Importing User model

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
  const { username, password } = req.body; // Getting username and password from the request

  try {
    // Creating new user
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).send('User created');
  } catch (error) {
    res.status(400).send('Error creating user');
  }
});

// Signin route
router.post('/signin', async (req, res) => {
  const { username, password } = req.body; // Getting username and password from the request

  try {
    // Finding user by username
    const user = await User.findOne({ username });
    if (!user) return res.status(400).send('User not found');

    // Checking password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid credentials');

    // Generating token
    const token = jwt.sign({ id: user._id }, 'secretkey'); // Secret key should be in env vars
    res.json({ token });
  } catch (error) {
    res.status(400).send('Error signing in');
  }
});

router.get('/verify', (req, res) => {

let token = req.headers.authorization.split(" ")[1];
console.log(req.header);
jwt.verify(token, secretKey, (err, res) => {
  if (err) {
    res.status(401).send('Unauthorized');
  } else {
    res.status(200).send('Authorized');
  }
})

})

module.exports = router; // Exporting router