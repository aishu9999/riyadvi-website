const express = require("express");
const Consultation = require("../models/Consultation");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      requirement,
      message,
    } = req.body;

    if (!name || !email || !requirement) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    const consultation = await Consultation.create({
      name,
      email,
      phone,
      company,
      requirement,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Your consultation request has been submitted successfully.",
      data: consultation,
    });
  } catch (error) {
    console.error("Consultation submission error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong while submitting your consultation request.",
    });
  }
});
router.get("/", async (req, res) => {
  try {
    const consultations = await Consultation.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      data: consultations,
    });
  } catch (error) {
    console.error("Fetching consultations error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch consultation requests.",
    });
  }
});
module.exports = router;