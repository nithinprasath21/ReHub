const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Ensure you have jsonwebtoken installed
const router = express.Router();

// Signup route for admin
router.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword, role: 'admin' }); // Set role to admin
        await newUser.save();

        res.status(201).json({ message: "Admin created successfully" });
    } catch (error) {
        console.error("Error creating admin:", error);
        res.status(500).json({ message: "Error creating admin" });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Create and assign a token with role
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        
        res.json({ token });
    } catch (error) {
        console.error("Error during login:", error); // Log the error for debugging
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
