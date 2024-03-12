const mongoose = require("mongoose");

// Define the schema
const chat = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    subject: {
        type: String,
    },
    message: {
        type: String,
    },
});

// Create the model and specify the collection name
const Chat = mongoose.model("Chat", chat, "chat");

module.exports = Chat;
