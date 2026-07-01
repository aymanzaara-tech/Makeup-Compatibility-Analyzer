const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");
const compatibilityRoutes = require("./routes/compatibilityRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
    res.json({
        message: "Makeup Compatibility Analyzer Backend is Running!"
    });
});

// Register API Routes
app.use("/api/products", productRoutes);
app.use("/api/compatibility", compatibilityRoutes);
app.use("/api/ai", aiRoutes);

module.exports = app;