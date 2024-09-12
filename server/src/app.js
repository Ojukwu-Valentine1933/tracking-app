const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const riderRoute = require("./routes/riderRoute");
const trackRoute = require("./routes/trackRoute");
const cookieParser = require("cookie-parser");
const adminRoute = require("./routes/adminRoute");

const app = express();

// Middleware to enable CORS
const corsOptions = {
  origin: "https://tracking-app-roan.vercel.app", // Specify the exact origin
  credentials: true, // Allow credentials
};

app.use(cors(corsOptions));

// Middleware to parse incoming request bodies as JSON
app.use(express.json());

app.use(cookieParser());

// Test route to check if the server is running
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server running fine" });
});

// User routes
app.use("/auth", userRoute);
//Rider routes
app.use("/riders", riderRoute);
//Track routes
app.use("/track", trackRoute);
//Admin routes
app.use("/admin", adminRoute);

module.exports = app;
