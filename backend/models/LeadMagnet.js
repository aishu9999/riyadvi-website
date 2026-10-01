const mongoose = require("mongoose");

const leadMagnetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
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
    status: {
      type: String,
      enum: ["new", "contacted"],
      default: "new",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("LeadMagnet", leadMagnetSchema);