const testCompatibilityController = (req, res) => {
    res.json({
        success: true,
        message: "Compatibility Controller Working"
    });
};

module.exports = {
    testCompatibilityController
};