const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const router = express.Router();

// Create new user (researcher or mentor)
router.post('/', async (req, res) => {
    const { email, password, role } = req.body; // Include role in the request

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword, role }); // Save the role
        await newUser.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error creating user:", error); // Log the error for debugging
        res.status(500).json({ message: "Error creating user" });
    }
});

module.exports = router;
