const express = require("express");
const router = express.Router();

const {
    testCompatibilityController
} = require("../controllers/compatibilityController");

router.get("/test", testCompatibilityController);

module.exports = router;