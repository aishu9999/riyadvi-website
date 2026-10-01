const express = require("express");
const LeadMagnet = require("../models/LeadMagnet");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, company, email, phone } = req.body;

    if (!name || !company || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    const lead = await LeadMagnet.create({
      name,
      company,
      email,
      phone,
    });

    res.status(201).json({
      success: true,
      message: "Guide access request submitted successfully.",
      data: lead,
    });
  } catch (error) {
    console.error("Lead magnet submission error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong while submitting your request.",
    });
  }
});
router.get("/", async (req, res) => {
  try {
    const leads = await LeadMagnet.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      data: leads,
    });
  } catch (error) {
    console.error("Fetching lead magnet requests error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch lead magnet requests.",
    });
  }
});
module.exports = router;