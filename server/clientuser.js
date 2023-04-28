const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,// The type property specifies the data type for the property, 
    required: true,//	The required property is set to true,
    // the property must be present in any object that is created using this schema.
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
const User = mongoose.model('User', userSchema);
module.exports = User;
