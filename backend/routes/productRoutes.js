const express = require("express");
const router = express.Router();

const {
    testProductController
} = require("../controllers/productController");

router.get("/test", testProductController);

module.exports = router;