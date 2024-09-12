const Track =  require("../models/trackModel");

const getTrackByUser =
  ("/tracks",
  async (req, res) => {
    const { userId } = req.user;
    try {
      const tracks = await Track.find({ userId });

      return res.status(200).json({ tracks });
    } catch (error) {
      return res.status(500).json({ error: "something went wrong" });
    }
  });

const createTrack =
  ("/tracks",
  async (req, res) => {
    const { name, locations } = req.body;

    if (!name || !locations) {
      return res.status(422).json({ error: "Missing fields" });
    }
    try {
      const track = new Track({ name, locations, userId: req.user._id });
      await track.save();
      return res.status(201).json({ track });
    } catch (error) {
      return res.status(500).json({ error: "something went wrong" });
    }
  });

module.exports = { getTrackByUser, createTrack };