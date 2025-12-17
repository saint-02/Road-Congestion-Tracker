const express = require("express");
const Traffic = require("../models/Traffic");
const router = express.Router();

function getCongestion(speed) {
  if (speed > 60) return "Free";
  if (speed >= 30) return "Moderate";
  return "High";
}

router.get("/", async (req, res) => {
  const roads = [
    "Independence Avenue",
    "Sam Nujoma Drive",
    "Mandume Ndemufayo Rd"
  ];

  await Traffic.deleteMany({});

  for (let road of roads) {
    const speed = Math.floor(Math.random() * 80);
    await Traffic.create({
      roadName: road,
      speed,
      congestionLevel: getCongestion(speed)
    });
  }

  const trafficData = await Traffic.find();
  res.json(trafficData);
});

module.exports = router;
