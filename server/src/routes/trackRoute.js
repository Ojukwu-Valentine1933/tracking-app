const express = require("express")
const router = express.Router()

const { getTrackByUser, createTrack } = require("../controllers/trackController")

router.get("/tracks-rider", getTrackByUser)
router.post("/create-track", createTrack)

module.exports = router;