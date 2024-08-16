const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/userRoute");

const app = express();

// Middleware to enable CORS
app.use(cors());

// Middleware to parse incoming request bodies as JSON
app.use(express.json());

// Test route to check if the server is running
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server running fine" });
});

// User routes
app.use("/auth", userRoute);

module.exports = app;
