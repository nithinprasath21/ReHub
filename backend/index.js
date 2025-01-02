// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt'); // Use bcrypt for password hashing
const jwt = require('jsonwebtoken'); // Use jsonwebtoken for token generation
const multer = require('multer'); // Use multer for file uploads

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('uploads')); // Serve uploaded files

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/researchPortal')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// User Schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Project Schema for waitinglist
const waitingListProjectSchema = new mongoose.Schema({
    projectName: String,
    projectDescription: String,
    ppt: String,
    studentName: String,
    collegeEmail: String,
});

const WaitingListProject = mongoose.model('WaitingList', waitingListProjectSchema);

// Project Schema for approved projects
const projectSchema = new mongoose.Schema({
    projectName: String,
    projectDescription: String,
    ppt: String,
    studentName: String,
    collegeEmail: String,
});

const Project = mongoose.model('Project', projectSchema);

// Register Route
app.post('/api/signup', async (req, res) => {
    const { email, password } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    
    res.status(201).send("User registered successfully");
});

// Login Route
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    
    if (!user) {
        return res.status(400).send("Invalid credentials");
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    
    if (!isValidPassword) {
        return res.status(400).send("Invalid credentials");
    }

    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    
    res.json({ token });
});

// File upload configuration for projects
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage });

// Submit Project Route - Save to waitinglist
app.post('/api/projects', upload.single('ppt'), async (req, res) => {
    const projectData = {
        projectName: req.body.projectName,
        projectDescription: req.body.projectDescription,
        ppt: req.file.path,
        studentName: req.body.studentName,
        collegeEmail: req.body.collegeEmail,
    };
    
    const newProject = new WaitingListProject(projectData); // Save to waitinglist collection
    
    await newProject.save();
    
    res.status(201).send(newProject);
});

// Approve Project Route
app.post('/api/approve/:id', async (req, res) => {
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

// Get Projects from Waiting List Route
app.get('/api/waitinglist', async (req, res) => {
   try {
       const projects = await WaitingListProject.find(); // Fetch from waitinglist
       res.send(projects);
   } catch (error) {
       console.error("Error fetching waiting list:", error);
       res.status(500).send("Server error");
   }
});

// Get Approved Projects Route
app.get('/api/projects', async (req, res) => {
   try {
       const projects = await Project.find(); // Fetch from projects collection
       res.send(projects);
   } catch (error) {
       console.error("Error fetching approved projects:", error);
       res.status(500).send("Server error");
   }
});

// Start server
app.listen(5000, () => {
   console.log('Server is running on http://localhost:5000');
});
