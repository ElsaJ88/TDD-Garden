// Get yield for plant
const getYieldForPlant = function (plant, environmentFactors) {
  let totalYield = plant.yield;
  const cropsFactors = plant.factor;
  if (!environmentFactors) {
    return totalYield;
  } else {
    for (factor in environmentFactors) {
      const factorValue = environmentFactors[factor];
      const value = plant.factor[factor][factorValue];

      totalYield = totalYield + (totalYield * value) / 100;
    }
    return totalYield;
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
// console.log(getCostsForCrop({ crops }, environmentFactors));

// Get Revenue For Crop
const getRevenueForCrop = (input, environmentFactors) => {
  let total = 0;
  input.crops.forEach((crops) => {
    total += crops.crop.salesPrice * getYieldForCrop(crops, environmentFactors);
  });

  return total;
};

// console.log(getRevenueForCrop({ crops }, environmentFactors));

//Get profit for crop
const getProfitForCrop = (input, environmentFactors) => {
  const profit =
    getRevenueForCrop(input, environmentFactors) - getCostsForCrop(input);
  return profit;
};

// Get total profit
const getTotalProfit = (input, environmentFactors) => {
  return getProfitForCrop(input, environmentFactors);
};

// console.log(getTotalProfit({ crops }, environmentFactors));

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
};
