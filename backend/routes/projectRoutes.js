const express = require('express');
const Project = require('../models/Project'); // Ensure this points to your Project model

const router = express.Router();

// Get Approved Projects Route
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find(); // Fetch from projects collection
        res.json(projects); // Send the projects as JSON response
    } catch (error) {
        console.error("Error fetching approved projects:", error);
        res.status(500).send("Server error");
    }
});

module.exports = router;
