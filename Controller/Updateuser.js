const user = require("../models/User");

exports.Updateuser = async (req, res) => {
    const { id } = req.params; 
    const { name, email, phone, hobby } = req.body;
    try {
        // Find the user by ID and update their information
        const updatedUser = await user.findByIdAndUpdate(id, { name, email, phone, hobby }, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        console.log(updatedUser)

        return res.status(200).json({ success: true, user: updatedUser, message: "User updated successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Failed to update user" });
    }
}
