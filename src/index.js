const express = require("express");
const connectDB= require('./config/db');
const seedSuperAdmin = require('./utils/superAdmin');
const app = express();
const cors = require("cors");

require('dotenv').config();
const UserRoute = require("./routes/userRoute");
const AdminRoute=require('./routes/adminRoute')

connectDB();

// Seed Super Admin
seedSuperAdmin();
// Middleware
app.use(cors());
app.use(express.json());

// Routes
 app.use("/api/users", UserRoute);
 app.use("/admin",AdminRoute)


// Start the server
app.listen(process.env.PORT, ()=>{
  console.log(`server is running on port ${process.env.PORT}`);
})