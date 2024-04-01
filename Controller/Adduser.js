const user = require("../models/User");

exports.addUser = async (req, res) => {
    try {
        const { email, phone, hobby, name } = req.body;

        // Check if any required field is missing or phone is not an integer
        if (!email || !name || !phone || !hobby || typeof phone !== 'number') {
            return res.status(422).json({
                success: false,
                message: "Invalid Data",
            });
        }
        
        const existingUser = await user.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists. Please sign in to continue.",
            });
        }

        const newUser = await user.create({
            name,
            email,
            phone,
            hobby,
        });

        return res.status(201).json({
            success: true,
            newUser,
            message: "User registered successfully",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be registered. Please try again.",
        });
    }
};
