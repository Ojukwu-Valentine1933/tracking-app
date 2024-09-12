const User = require("../models/userModel");
const { ADMIN_INVITE_CODE } = require("../config/dotEnv");
const bcrypt = require("bcryptjs");

const createNewAdmin = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      type,
      inviteCode,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !type ||
      !inviteCode
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    const adminInviteCode = ADMIN_INVITE_CODE;

    if (inviteCode !== adminInviteCode) {
      return res.status(403).json({ message: "Invalid invite code" });
    }
    const newAdmin = new User({
      firstName,
      lastName,
      email,
      password,
      type,
    });

    if (type !== "admin") {
        return res.status(400).json({ message: "Invalid user type" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    newAdmin.password = hashPassword;
    const savedAdmin = await newAdmin.save();

    return res.status(201).json({
      message: "Admin created successfully",
      user: {
        _id: savedAdmin._id,
        firstName: savedAdmin.firstName,
        lastName: savedAdmin.lastName,
        email: savedAdmin.email,
        type: savedAdmin.type,
        createdAt: savedAdmin.createdAt,
        updatedAt: savedAdmin.updatedAt,
      },
    });
  } catch (error) {
    console.error("Error while creating admin:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = createNewAdmin;
