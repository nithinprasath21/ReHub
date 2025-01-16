const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const router = express.Router();

// Create New Researcher
router.post('/researcher', async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword, role: 'researcher' });
        await newUser.save();

        res.status(201).json({ message: "Researcher created successfully" });
    } catch (error) {
        console.error("Error creating researcher:", error);
        res.status(500).json({ message: "Error creating user" });
    }
});

// Create New Mentor
router.post('/mentor', async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword, role: 'mentor' });
        await newUser.save();

        res.status(201).json({ message: "Mentor created successfully" });
    } catch (error) {
        console.error("Error creating mentor:", error);
        res.status(500).json({ message: "Error creating user" });
    }
});

module.exports = router;
