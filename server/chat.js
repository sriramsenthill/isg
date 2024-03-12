const Chat = require("./models/chat");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    // Your email configuration, such as service, auth, etc.
    service: "gmail",
    auth: {
        user: "senthilnathan.shanmugam2003@gmail.com",
        pass: "bity hppa lzyv dcbk",
    },
});

// Function to send email with chat details
const chatmail = async (req, res) => { // Include 'res' as a parameter
    const { name, email, subject, message } = req.body;
    const mailOptions = {
        from: "senthilnathan.shanmugam2003@gmail.com",
        to: "isgministriesuk@gmail.com",
        subject: `Chat message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
    };

    try {
        const newChat = new Chat({
            name: name,
            email: email,
            subject: subject,
            message: message
        });
        await newChat.save();
        console.log("Chat details saved successfully.");
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
        res.status(200).send("Success"); // Sending success response
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email"); // Sending error response
    }
};

module.exports = { chatmail };
