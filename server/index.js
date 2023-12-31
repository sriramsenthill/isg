const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

// Connect to your MongoDB database
mongoose
    .connect(
        "mongodb+srv://isg:isguni@cluster0.zowuscz.mongodb.net/admin?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

app.get("/", async (req, res) => {
    try {
        res.send("hello world");
    } catch (error) {
        console.error("Error fetching job orders:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});




// Start the server

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 