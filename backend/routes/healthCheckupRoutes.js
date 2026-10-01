const express = require("express");
const HealthCheckup = require("../models/HealthCheckup");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      businessName,
      email,
      phone,
      industry,
      website,
      digitalPresence,
      marketingChannels,
      marketingGoal,
      technology,
      technologyChallenge,
      challenges,
    } = req.body;

    if (!businessName || !email || !phone || !challenges) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    const healthCheckup = await HealthCheckup.create({
      businessName,
      email,
      phone,
      industry,
      website,
      digitalPresence,
      marketingChannels,
      marketingGoal,
      technology,
      technologyChallenge,
      challenges,
    });

    res.status(201).json({
      success: true,
      message: "Business Health Checkup submitted successfully.",
      data: healthCheckup,
    });
  } catch (error) {
    console.error("Health Checkup submission error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong while submitting the health checkup.",
    });
  }
});
router.get("/", async (req, res) => {
  try {
    const healthCheckups = await HealthCheckup.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      data: healthCheckups,
    });
  } catch (error) {
    console.error("Fetching health checkups error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch health checkups.",
    });
  }
});
module.exports = router;