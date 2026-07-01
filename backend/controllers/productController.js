const testProductController = (req, res) => {
    res.json({
        success: true,
        message: "Product Controller Working"
    });
};

module.exports = {
    testProductController
};