const {createNewUser, userLogin, forgottenPassword, verifyAndUpdatePassword } = require("../controllers/userController");
const express = require("express");

const router = express.Router();

router.post("/create-user", createNewUser);
router.post("/login", userLogin);
router.post("/recover-password", forgottenPassword)
router.post("/update-password", verifyAndUpdatePassword)

module.exports = router;


