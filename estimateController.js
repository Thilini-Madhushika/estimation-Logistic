const { calculateCost } = require("../services/aiEstimator");

exports.estimateCost = (req, res) => {

  const { area, rooms, floors, material } = req.body;

  const cost = calculateCost(area, rooms, floors, material);

  res.json({
    estimatedCost: cost
  });
};