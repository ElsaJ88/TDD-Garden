const corn = {
  name: "corn",
  yield: 30,
  cost: 2,
  salesPrice: 4,
  factor: {
    sun: {
      low: -50,
      medium: 0,
      high: 50,
    },
  },
};

const pumpkin = {
  name: "pumpkin",
  yield: 4,
  cost: 2,
  salesPrice: 5,
  factor: {
    sun: {
      low: -25,
      medium: 0,
      high: 25,
    },
  },
};

const environmentFactors = {
  sun: "low",
};

const crops = [
  { crop: corn, numCrops: 5 },
  { crop: pumpkin, numCrops: 2 },
];

// Get yield for plant
const getYieldForPlant = function (plant, environmentFactors) {
  if (!environmentFactors) {
    return plant.yield;
  } else {
    for (x in environmentFactors) {
      const factor = x;
      const factorValue = environmentFactors[x];
      return (
        plant.yield + (plant.yield * plant.factor[factor][factorValue]) / 100
      );
    }
  }
};

// Get yield for crop
const getYieldForCrop = (plant, environmentFactors) => {
  return getYieldForPlant(plant.crop, environmentFactors) * plant.numCrops;
};

// Get total yield
const getTotalYield = (input, environmentFactors) => {
  let total = 0;
  input.crops.forEach((crops) => {
    total += getYieldForCrop(crops, environmentFactors);
  });
  return total;
};

// Get Costs For Crop
const getCostsForCrop = (input) => {
  let total = 0;
  input.crops.forEach((crops) => {
    total += crops.crop.cost * crops.numCrops;
  });
  return total;
};

// Get Revenue For Crop
const getRevenueForCrop = (input, environmentFactors) => {
  let total = 0;
  input.crops.forEach((crops) => {
    total += crops.crop.salesPrice * getYieldForCrop(crops, environmentFactors);
  });

  return total;

  // return input.crops[0].crop.salesPrice * getTotalYield(input);
};

console.log(getRevenueForCrop({ crops }, environmentFactors));

//Get profit for crop
const getProfitForCrop = (input) => {
  const profit = getRevenueForCrop(input) - getCostsForCrop(input);
  return profit;
};

// Get total profit
const getTotalProfit = (input) => {
  return getProfitForCrop(input);
};

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
};
