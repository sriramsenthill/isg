const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
const port = 3000;
const User = require("./models/user")
const jwt = require("jsonwebtoken");

const corsOptions = {
    origin: 'https://www.isgbiblecollegeuk.com', // Replace with your actual frontend domain
    credentials: true, // You may need to set this based on your application's requirements
};

app.use(cors(corsOptions));
// Connect to your MongoDB database
mongoose
    .connect(
        "mongodb+srv://isg:isguni@cluster0.zowuscz.mongodb.net/isg?retryWrites=true&w=majority",
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

// POST route for creating a new user
app.post("/register", async (req, res) => {
    try {
        // Check if the email already exists
        const existingUser = await User.findOne({ email: req.body.email });

        if (existingUser) {
            // If the email already exists, return a 400 status with a custom error message
            return res.status(400).json({ error: "Email already exists" });
        }

        // Create a new user based on the request body
        const newUser = new User(req.body);

        // Save the new user to the database
        const savedUser = await newUser.save();

        // Send the saved user as the response
        res.json(savedUser);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post("/signIn", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        let validPassword = false; // Declare validPassword outside of the block

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (password === user.password) {
            validPassword = true; // Update the value inside the block
        } else {
            return res.status(401).json({ message: "Invalid password" });

        }


        const token = jwt.sign({ name: user.name }, "isgbiblecollegeuk", {
            expiresIn: "1h",
        });
        res.json({ token });
    } catch (error) {
        console.error("Failed to sign in:", error);
        res.status(500).json({ message: "Failed to sign in" });
    }
});


// Start the server

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 