const User = require("./models/user");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    // Your email configuration, such as service, auth, etc.
    service: "gmail",
    auth: {
        user: "senthilnathan.shanmugam2003@gmail.com",
        pass: "bity hppa lzyv dcbk",
    },
});

const registerUser = async (req, res) => {
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

        // Send email notification
        await sendRegistrationEmail(savedUser);

        // Send the saved user as the response
        res.json(savedUser);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const sendRegistrationEmail = async (user) => {
    const mailOptions = {
        from: "senthilnathan.shanmugam2003@gmail.com",
        to: "isgministriesuk@gmail.com",
        subject: "New ISG User Registration",
        text: `A new user has registered with the following details:\n\n
      Name: ${user.name}\n
      Email: ${user.email}\n
      Phone Number: ${user.number}\n,
      Type: ${user.type}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
    }
};


module.exports = { registerUser };
