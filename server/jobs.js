const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  datePosted: {
    type: String,
    required: true,
  },
  employeeType: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
});

const Job = mongoose.model('Jobs', jobSchema);

module.exports = Job;
