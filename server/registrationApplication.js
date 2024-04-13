const Registration = require("./models/registration");

const registration = async (req, res) => {
    const {
        country,
        name,
        fatherName,
        dob,
        passportPhoto,
        married,
        address,
        city,
        state,
        postalCode,
        email,
        whatsappNumber,
        churchName,
        churchRegisterNumber,
        churchAddress,
        churchPhoneNumber,
        churchMembers,
        churchExperience,
        courseCertificate,
        attestation,
    } = req.body;

    try {
        // Validate input fields
        if (
            !country ||
            !name ||
            !fatherName ||
            !dob ||
            !married ||
            !address ||
            !city ||
            !state ||
            !postalCode ||
            !email ||
            !whatsappNumber ||
            !churchName ||
            !churchAddress ||
            !churchPhoneNumber ||
            !churchMembers ||
            !churchExperience ||
            !courseCertificate ||
            !attestation
        ) {
            return res.status(400).send("All fields are required.");
        }

        const newRegistration = new Registration({
            country,
            name,
            fatherName,
            dob,
            passportPhoto,
            married,
            address,
            city,
            state,
            postalCode,
            email,
            whatsappNumber,
            churchName,
            churchRegisterNumber,
            churchAddress,
            churchPhoneNumber,
            churchMembers,
            churchExperience,
            courseCertificate,
            attestation,
        });

        await newRegistration.save();
        console.log("Registration details saved successfully.");
        res.status(200).send("Success");
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error saving registration details.");
    }
};

const getDetails = async (req, res) => {
    try {
        const details = await Registration.find({});
        res.json(details);
    } catch (error) {
        console.error("Error retrieving details:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { registration, getDetails };