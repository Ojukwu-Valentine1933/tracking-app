const express = require("express");
const router = express.Router()
const createNewAdmin = require("../controllers/adminController")

router.post("/auth/create-new-admin",  createNewAdmin)

module.exports = router;