const mongoose = require('mongoose');

const myFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  file: {
    type: String, // Assuming you want to store the base64-encoded file data
    required: true,
  },
});

const MyFormModel = mongoose.model('MyForm', myFormSchema);

module.exports = MyFormModel;
