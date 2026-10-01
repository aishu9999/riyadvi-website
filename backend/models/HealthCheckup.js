const mongoose = require("mongoose");

const healthCheckupSchema = new mongoose.Schema(
  {
    businessName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    industry: {
      type: String,
      trim: true,
    },
    website: {
      type: String,
      trim: true,
    },
    digitalPresence: {
      type: String,
      trim: true,
    },
    marketingChannels: {
      type: String,
      trim: true,
    },
    marketingGoal: {
      type: String,
      trim: true,
    },
    technology: {
      type: String,
      trim: true,
    },
    technologyChallenge: {
      type: String,
      trim: true,
    },
    challenges: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["new", "reviewed", "contacted"],
      default: "new",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("HealthCheckup", healthCheckupSchema);