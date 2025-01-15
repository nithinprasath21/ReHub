const mongoose = require('mongoose');

const waitingListProjectSchema = new mongoose.Schema({
    projectName: String,
    projectDescription: String,
    ppt: String,
    studentName: String,
    collegeEmail: String,
});

module.exports = mongoose.model('WaitingList', waitingListProjectSchema);
