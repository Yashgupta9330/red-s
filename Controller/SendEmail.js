const User = require("../models/User");
const mailSender = require("../utils/mailSender");

exports.SendEmail = async (req, res) => {
    const emails = req.body.selectedEmails; 
    const users = [];

    try {
        for (const email of emails) {
            const user = await User.findOne({ email }); // Assuming 'email' is the field for email addresses in the User model
            if (user) {
                users.push(user);
            }
        }

        const response = await mailSender("yrcb342@gmail.com", "TASK", users); // Assuming mailSender function takes email, subject, and users array
        console.log("response", response);
        
        return res.status(200).json({
            success: true,
            users: users,
            message: "Mail sent successfully",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error in sending emails.",
        });
    }
}
