const User = require("../models/userModel");
const transport = require("../smtpTransport/smptServer");
const mongoose = require("mongoose");
const generateToken = require("../helpers/recoverPasswordToken");
const dotenv = require("dotenv");
dotenv.config();
const bcrypt = require("bcryptjs");

const createNewUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    // Check if all required fields are provided
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All input fields are required" });
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if the user already exists
    const checkUserExist = await User.findOne({ email });
    if (checkUserExist) {
      return res.status(400).json({ message: "User already exists. Please log in instead." });
    }
   
    // Create a new user
    const newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      firstName,
      lastName,
      email,
      password, // Password will be hashed automatically due to pre-save hook
    });
    const hashedPassword = await bcrypt.hash(password, 10);
    newUser.password = hashedPassword;
    // Save the new user to the database
    const savedUser = await newUser.save();

    // Respond with success message and user data (excluding password)
    return res.status(201).json({
      message: "User created successfully",
      user: {
        _id: savedUser._id,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
        email: savedUser.email,
        createdAt: savedUser.createdAt,
        updatedAt: savedUser.updatedAt,
      },
    });
  } catch (error) {
    console.log("Error creating user", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


// Remove the extra closing curly brace

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "All input fields are required" });
    }

    const loginAttempt = await User.findOne({ email });
    if (!loginAttempt) {
      return res.status(400).json({ message: "User not found" });
    }

    console.log("Provided Password:", password);
    console.log("Stored Hashed Password:", loginAttempt.password);

    const passwordMatch = await bcrypt.compare(password, loginAttempt.password);
    console.log("passwordMatch", passwordMatch);
    if (passwordMatch) {
      return res.status(200).json({ message: "Login Successful" });
    } else {
      return res.status(400).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Login Failed" });
  }
};

const forgottenPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email input must not be empty" });
    }

    const recoverPassword = await User.findOne({ email: email });

    if (!recoverPassword) {
      return res
        .status(404)
        .json({ message: "No user is linked with this email" });
    }

    const code = generateToken().toString().trim(); // Generate the token and ensure it's a string and trimmed

    // Debugging: Log the generated code
    console.log("Generated 6-digit code:", code);

    recoverPassword.passwordResetCode = code;
    recoverPassword.passwordResetExpires = Date.now() + 3600000; // 1 hour expiry

    // Debugging: Log before saving
    console.log(
      "Before saving, passwordResetCode:",
      recoverPassword.passwordResetCode
    );

    await recoverPassword.save();

    // Debugging: Log after saving
    console.log(
      "After saving, passwordResetCode:",
      recoverPassword.passwordResetCode
    );

    const mailOption = {
      to: email,
      from: process.env.USER_EMAIL,
      subject: "Email Recovery Token",
      html: `<h2>This is the token for recovering your password :</h2> <h3>${code}</h3>`,
    };

    transport.sendMail(mailOption, (error) => {
      if (error) {
        return res.status(500).json({ message: "Failed to send email" });
      } else {
        return res.json({ message: "Email sent successfully" });
      }
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

const verifyAndUpdatePassword = async (req, res) => {
  try {
    const { passwordResetCode, password, confirmPassword } = req.body;

    if (!passwordResetCode || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Find the user by email
    const user = await User.findOne({ passwordResetCode });

    if (!user) {
      return res.status(403).json({ message: "invalid password reset code" });
    }

    if (user.passwordResetExpires < Date.now()) {
      user.passwordResetCode = undefined;
      user.passwordResetExpires = undefined;
      await user.save();
      return res.status(400).json({ message: "Code has expired" });
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Hash the new password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Update the user's password and clear the reset code
    user.password = hashedPassword;
    user.passwordResetCode = undefined;
    user.passwordResetExpires = undefined;

    await user.save();

    res.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error occurred during password reset:", error); // Log the error details
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createNewUser,
  userLogin,
  forgottenPassword,
  verifyAndUpdatePassword,
};
