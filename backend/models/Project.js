const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectName: String,
    projectDescription: String,
    ppt: String,
    studentName: String,
    collegeEmail: String,
});

module.exports = mongoose.model('Project', projectSchema);
