const User = require("../models/userModel");
const transport = require("../smtpTransport/smptServer");
const generateToken = require("../helpers/recoverPasswordToken");
const bcrypt = require("bcryptjs");
const { generateWebToken } = require("../helpers/jwtHelpers");
const {
  JWT_SECRET,
  ACCESS_TOKEN_EXPIRES_IN,
  REFRESH_TOKEN_EXPIRES_IN,
  ACCESS_TOKEN_SECRET,
} = require("../config/dotEnv");
const jwt = require("jsonwebtoken");

const createNewUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword, type } =
      req.body;

    // Check if all required fields are provided
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !type
    ) {
      return res.status(400).json({ message: "All input fields are required" });
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if the user already exists
    const checkUserExist = await User.findOne({ email });
    if (checkUserExist) {
      return res
        .status(400)
        .json({ message: "User already exists. Please log in instead." });
    }

    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password, // Password will be hashed automatically due to pre-save hook
      type,
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
        type: savedUser.type,
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

    const loginAttempt = await User.findOne({ email }).exec();

    if (!loginAttempt) {
      return res.status(400).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, loginAttempt.password);

    if (passwordMatch) {
      const jwtPayload = {
        userId: loginAttempt._id.toString(), // Ensure _id is converted to string if needed
        email: loginAttempt.email,
        type: loginAttempt.type,
      };

      const accessToken = generateWebToken(jwtPayload, "1h", JWT_SECRET);

      const refreshToken = generateWebToken(jwtPayload, "7d", JWT_SECRET);

      const cookieOptions = {
        expires: new Date(Date.now() + 3600),
        maxAge: 60 * 60 * 1000, // 1 hour
        httpOnly: true,
        secure: true,
        sameSite: "none",
      };

      return res
        .cookie("accessToken", accessToken, cookieOptions)
        .json({ message: "Login Successful", refreshToken });
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

const getCurrentUser = async (req, res) => {
  try {
    const { userId } = req.user;
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(error);
  }
};

const generateNewAccessToken = async (req, res) => {
  try {
    const headers = req.headers["authorization"];
    if (!headers) {
      return res.status(403).json({ error: "Authorization header missing" });
    }

    if (headers.split(" ")[0] !== "Bearer") {
      return res.status(403).json({ error: "Invalid Token" });
    }

    // Get the refresh token
    const refreshToken = headers.split(" ")[1];

    // Verify the refresh token
    const payload = jwt.verify(refreshToken, JWT_SECRET);
    const userData = {
      userId: payload.userId,
      email: payload.email,
      type: payload.type,
    };

    // Generate a new access token with 1hr validity period
    const accessToken = generateWebToken(userData, "1h", JWT_SECRET);

    if (!accessToken) {
      return res.status(400).json({ error: "Token generation failed" });
    }

    // Set cookie options (cookie expires in 1 month)
    const cookieOptions = {
      expires: new Date(Date.now() + 3600), // 1 month in milliseconds
      maxAge: 60 * 60 * 1000, // 1 hour
      httpOnly: true,
      sameSite: "none",
      secure: true, // Ensure secure cookies in production
    };

    // Send success response with new access token and set it as a cookie
    return res.cookie("accessToken", accessToken, cookieOptions).json({
      message: "New access token generated successfully",
      accessToken,
    });
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res
        .status(403)
        .json({ error: "Refresh token expired, please login again" });
    }

    res.status(500).json({ error: "Internal Server Error" });
    console.log(error);
  }
};

const logOutUser = async (req, res) => {
  try {
    return res
      .clearCookie("accessToken")
      .json({ message: "logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const verifyUserAccount = async (req, res) => {
  try {
    const { verificationToken } = req.body;

    // check for user with verifification token
    const user = await User.findOne({ verificationToken });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // verify user account
    // change verification status from false to true
    user.isVerified = true;
    // delete verification token from user object
    user.verificationToken = undefined;

    // save user object
    await user.save();

    return res.status(200).json({ message: "user verification successful" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createNewUser,
  userLogin,
  forgottenPassword,
  verifyAndUpdatePassword,
  getCurrentUser,
  generateNewAccessToken,
  logOutUser,
  verifyUserAccount,
};
