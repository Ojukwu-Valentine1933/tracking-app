const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pointSchema = new Schema({
  coords: {
    latitude: Number,
    longitude: Number,
    altitude: Number,
    accuracy: Number,
    heading: Number,
    speed: Number,
  },
});

const trackSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },

    name: {
      type: String,
      default: "",
    },

    locations: [pointSchema],
  },
  { timestamps: true }
);

const Track = mongoose.model("track", trackSchema);

module.exports = Track;