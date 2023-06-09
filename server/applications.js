const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  jobId: {
    type: String,
    required: true,
  },

  candidate: [
    {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phoneNum: {
        type: String,
        required: true,
      },
    },
  ],
  applicationQs: [
    {
      questionOne: {
        type: String,
      },
      questionTwo: {
        type: String,
      },
    },
  ],
  CVupload: {
    type: Buffer,
  },
  
});

const Apply = mongoose.model('Apply', applicationSchema);

module.exports = Apply;
