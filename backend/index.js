const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

// Import routes
const authRoutes = require('./routes/authRoutes'); // Ensure this path is correct
const userRoutes = require('./routes/userRoutes'); // Import user routes
const projectRoutes = require('./routes/projectRoutes'); // Change this line to match the filename

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/researchPortal')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection failed:', err));

// Use routes
app.use('/api/auth', authRoutes); // Register auth routes under /api/auth
app.use('/api/auth', userRoutes); // Register user creation routes under /api/auth
app.use('/api/projects', projectRoutes); // Register project routes under /api/projects

// Start server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
