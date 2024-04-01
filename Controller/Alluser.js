const user = require("../models/User");

exports.allUser = async (req, res) => {
    try {
       // Fetch all users from the database
       const users = await user.find();

       // Return the list of users
       return res.status(200).json({
           success: true,
           users: users,
           message: "List of all users",
       });

     }

       catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error in fetching Details.",
        });
    }

};
