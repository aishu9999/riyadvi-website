const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");
const consultationRoutes = require("./routes/consultationRoutes");
const healthCheckupRoutes = require("./routes/healthCheckupRoutes");
const leadMagnetRoutes = require("./routes/leadMagnetRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/contact", contactRoutes);

app.use("/api/consultation", consultationRoutes);
app.use("/api/health-checkup", healthCheckupRoutes);

app.use("/api/lead-magnet", leadMagnetRoutes);
app.use("/api/applications", applicationRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Riyadvi backend API is running",
  });
});