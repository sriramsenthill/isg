const mongoose = require("mongoose");

// Define the schema
const registration = new mongoose.Schema({
    country: {
        type: String,
    },
    name: {
        type: String,
    },
    fatherName: {
        type: String,
    },
    dob: {
        type: String,
    },
    passportPhoto: {
        type: String,
    },
    married: {
        type: String,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    postalCode: {
        type: String,
    },
    email: {
        type: String,
    },
    whatsappNumber: {
        type: String,
    },
    churchName: {
        type: String,
    },
    churchRegisterNumber: {
        type: String,
    },
    churchAddress: {
        type: String,
    },
    churchPhoneNumber: {
        type: String,
    },
    churchMembers: {
        type: String,
    },
    churchExperience: {
        type: String,
    },
    courseCertificate: {
        type: String,
    },
    attestation: {
        type: String,
    },
});

// Create the model and specify the collection name
const Registration = mongoose.model("Registration", registration, "registration");

module.exports = Registration;