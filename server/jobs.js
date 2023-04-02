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
  location: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  employeeType: {
    type: String,
    required: true,
  },
  jobDescription: [
    {
      jobDes1: {
        type: String,
      },
      jobDes2: {
        type: String,
      },
      jobDes3: {
        type: String,
      },
    },
  ],
  jobDuties: [
    {
      jobDuties1: {
        type: String,
      },
      jobDuties2: {
        type: String,
      },
      jobDuties3: {
        type: String,
      },
      jobDuties4: {
        type: String,
      },
    },
  ],
  jobExperience: [
    {
      jobExp1: {
        type: String,
      },
      jobExp2: {
        type: String,
      },
      jobExp3: {
        type: String,
      },
      jobExp4: {
        type: String,
      },
    },
  ],
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
