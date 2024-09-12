// riderController.js
const User = require("../models/userModel");

const getAllRider = async (req, res) => {
  try {
    const { type } = req.user; // Ensure req.user is populated by middleware

    if (type !== "admin") {
      return res.status(403).json({ message: "Access denied: Admins only" });
    }

    const riders = await User.find({ type: "rider" }).select("-password");

    if (!riders || riders.length === 0) {
      return res.status(404).json({ message: "No riders found" });
    }

    return res.status(200).json({ message: "success", riders });
  } catch (error) {
    console.error("Error while fetching riders:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getRidersOnTransit = async (req, res) => {
  try {
    const { type } = req.user; // Ensure req.user is populated by middleware

    if (type !== "admin") {
      return res.status(403).json({ message: "Access denied: Admins only" });
    }

    const riders = await User.find({ type: "rider" }).select("-password");

    if (!riders || riders.length === 0) {
      return res.status(404).json({ message: "No riders found" });
    }

    return res.status(200).json({
      message: "success",
      riders: riders.filter((rider) => rider.onTransit),
    });
  } catch (error) {
    console.error("Error while fetching riders:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};




module.exports = {getAllRider, getRidersOnTransit}
