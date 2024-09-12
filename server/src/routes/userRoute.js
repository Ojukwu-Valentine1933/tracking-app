const {
  createNewUser,
  userLogin,
  forgottenPassword,
  verifyAndUpdatePassword,
  getCurrentUser,
  generateNewAccessToken,
  logOutUser,
  verifyUserAccount,
} = require("../controllers/userController");

const authenticateJWT = require("../middlewares/authenticateJWT");

const express = require("express");

const router = express.Router();

router.post("/create-user", createNewUser);
router.post("/login", userLogin);
router.post("/recover-password", forgottenPassword);
router.post("/update-password", verifyAndUpdatePassword);
router.get("/me", authenticateJWT, getCurrentUser);
router.get("/access-token", generateNewAccessToken);
router.post("/logout", logOutUser);
router.put("/verify", verifyUserAccount);

module.exports = router;
