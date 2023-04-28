const mongoose = require('mongoose');

const saveJobschema = new mongoose.Schema({
  jobID: {
    type: String, // The type property specifies the data type for the property,
  },
  jobTitle: {
    type: String,
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
});
const SaveJob = mongoose.model('SaveJob', saveJobschema);
module.exports = SaveJob;
