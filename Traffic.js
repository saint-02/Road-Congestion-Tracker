const mongoose = require("mongoose");

const trafficSchema = new mongoose.Schema({
  roadName: String,
  speed: Number,
  congestionLevel: String,
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Traffic", trafficSchema);
