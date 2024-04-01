const express = require("express");
const app = express();
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Connect to the database
database.connect();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:process.env.REACT_APP_BASE_URL
}));

// Import your controller
const { addUser } = require("./Controller/Adduser");
const { allUser } = require("./Controller/Alluser");
const { SendEmail } = require("./Controller/SendEmail");
const { HandleDelete } = require("./Controller/HandleDelete");
const { Updateuser } = require("./Controller/Updateuser");

// Routes
app.post("/add", addUser);
app.get('/list',allUser);
app.post('/send',SendEmail);
app.delete('/delete/:id', HandleDelete);
app.put('/update/:id',Updateuser);
console.log('added route')
// Default route
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: 'Your server....'
  });
});



// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App is at ${PORT}`);
});
