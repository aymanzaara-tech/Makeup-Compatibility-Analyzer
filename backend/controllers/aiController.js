const testAIController = (req, res) => {
    res.json({
        success: true,
        message: "AI Controller Working"
    });
};

module.exports = {
    testAIController
};