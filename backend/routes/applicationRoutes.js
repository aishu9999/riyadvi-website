const express = require("express");
const multer = require("multer");
const path = require("path");
const Application = require("../models/Application");

const router = express.Router();

// Resume upload configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/resumes");
  },

  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);

    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,

  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF, DOC, and DOCX resumes are allowed."));
    }
  },

  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, phone, position, message } = req.body;

    if (!name || !email || !phone || !position || !req.file) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields and upload your resume.",
      });
    }

    const application = await Application.create({
      name,
      email,
      phone,
      position,
      resume: req.file.path,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Your application has been submitted successfully.",
      data: application,
    });
  } catch (error) {
    console.error("Application submission error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong while submitting your application.",
    });
  }
});
router.get("/", async (req, res) => {
  try {
    const applications = await Application.find().sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      data: applications,
    });
  } catch (error) {
    console.error("Fetching applications error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch career applications.",
    });
  }
});
module.exports = router;