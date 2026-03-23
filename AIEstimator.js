function calculateCost(area, rooms, floors, material) {

let baseCost = area * 50000;

if(material === "premium"){
baseCost *= 1.5;
}

baseCost += rooms * 200000;
baseCost += floors * 500000;

return baseCost;

}

module.exports = { calculateCost };
