const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectName: { type: String, required: true },
    projectDescription: { type: String, required: true },
    ppt: { type: String },
    studentName: { type: String, required: true },
    collegeEmail: { type: String, required: true },
});

module.exports = mongoose.model('Project', projectSchema);
