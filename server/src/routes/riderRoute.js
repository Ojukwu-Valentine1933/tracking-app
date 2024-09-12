// riderRoutes.js
const express = require("express");
const router = express.Router();
const authenticateJwt = require("../middlewares/authenticateJWT");
const {
  getAllRider,
  getRidersOnTransit,
} = require("../controllers/riderController");

router.get("/", authenticateJwt, getAllRider);
router.get("/transit", authenticateJwt, getRidersOnTransit);

module.exports = router;
