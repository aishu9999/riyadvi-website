const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, company, requirement, message } = req.body;

    if (!name || !email || !requirement || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      company,
      requirement,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Your enquiry has been submitted successfully.",
      data: contact,
    });
  } catch (error) {
    console.error("Contact submission error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong while submitting your enquiry.",
    });
  }
});
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    console.error("Fetching contacts error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch contact enquiries.",
    });
  }
});
router.patch("/:id/status", async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = ["new", "contacted", "closed"];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status.",
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact enquiry not found.",
      });
    }

    res.json({
      success: true,
      message: "Status updated successfully.",
      data: contact,
    });
  } catch (error) {
    console.error("Status update error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update status.",
    });
  }
});
module.exports = router;
