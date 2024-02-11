const mongoose = require("mongoose");

// Define the schema
const studentSchema = new mongoose.Schema({
    NAME: {
        type: String,
    },
    REG_NO: {
        type: String,
        required: true,
    },
});

// Create the model and specify the collection name
const Studentdata = mongoose.model("Studentdata", studentSchema, "student");

module.exports = Studentdata;
