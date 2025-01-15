const express = require('express');
const WaitingListProject = require('../models/WaitingListProject');
const Project = require('../models/Project');

const router = express.Router();

// Submit Project Route - Save to waitinglist
router.post('/', async (req, res) => {
    const projectData = {
        projectName: req.body.projectName,
        projectDescription: req.body.projectDescription,
        ppt: req.body.ppt,
        studentName: req.body.studentName,
        collegeEmail: req.body.collegeEmail,
    };
    
    const newProject = new WaitingListProject(projectData); // Save to waitinglist collection
    
    await newProject.save();
    
    res.status(201).send(newProject);
});

// Approve Project Route
router.post('/approve/:id', async (req, res) => {
    const { id } = req.params;

    // Find the project in waitinglist
    const project = await WaitingListProject.findById(id);
    
    if (!project) {
        return res.status(404).send("Project not found");
    }

    // Create a new project in the projects collection
    const newProject = new Project(project.toObject());
    
    await newProject.save();

    // Delete from waitinglist
    await WaitingListProject.deleteOne({ _id: id });

    res.send("Project approved successfully");
});

// Reject Project Route
router.delete('/reject/:id', async (req, res) => {
    const { id } = req.params;

    // Delete the project from waitinglist
    const result = await WaitingListProject.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
        return res.status(404).send("Project not found");
    }

    res.send("Project rejected successfully");
});

// Get Projects from Waiting List Route
router.get('/waitinglist', async (req, res) => {
   try {
       const projects = await WaitingListProject.find(); // Fetch from waitinglist
       res.send(projects);
   } catch (error) {
       console.error("Error fetching waiting list:", error);
       res.status(500).send("Server error");
   }
});

// Get Approved Projects Route
router.get('/', async (req, res) => {
   try {
       const projects = await Project.find(); // Fetch from projects collection
       res.send(projects);
   } catch (error) {
       console.error("Error fetching approved projects:", error);
       res.status(500).send("Server error");
   }
});

// Schedule Meeting Route (Placeholder)
router.post('/schedule-meeting', async (req, res) => {
   const { mentorId, meetingDetails } = req.body;
   // Here you would typically integrate with Microsoft Teams API or another calendar API.
   // For now, we will just return a success message.

   // Example of what you might do:
   // const meetingLink = await scheduleMeetingWithTeams(meetingDetails);

   res.send(`Meeting scheduled successfully for mentor ID ${mentorId}.`);
});

module.exports = router;
