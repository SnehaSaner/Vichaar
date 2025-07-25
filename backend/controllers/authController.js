const User = require('../models/userModel');

exports.registerUser = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Check if email already exists
  User.getAll((err, users) => {
    if (err) return res.status(500).json({ message: 'DB error', error: err });

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const newUser = { name, email, password }; // You can hash password later
    User.create(newUser, (err, result) => {
      if (err) return res.status(500).json({ message: 'Error creating user', error: err });

      res.status(201).json({ message: 'User registered successfully' });
    });
  });
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  User.getAll((err, users) => {
    if (err) return res.status(500).json({ message: 'DB error', error: err });

    const foundUser = users.find(user => user.email === email && user.password === password);
    if (!foundUser) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', user: foundUser });
  });
};
