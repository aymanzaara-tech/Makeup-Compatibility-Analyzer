const express = require("express");
const router = express.Router();

const {
    testAIController
} = require("../controllers/aiController");

router.get("/test", testAIController);

module.exports = router;