const getYieldForPlant = (input) => input.yield;

const getYieldForCrop = (input) => {
  return getYieldForPlant(input.crop) * input.numCrops;
};

const getTotalYield = (input) => {
  let total = 0;
  input.crops.forEach((crops) => {
    total += getYieldForCrop(crops);
  });
  return total;
};

// Get Costs For Crop

const corn = {
  name: "corn",
  yield: 3,
  cost: 3,
  salesPrice: 5,
};
const crops = [{ crop: corn, numCrops: 5 }];

const getCostsForCrop = (input) => {
  let total = 0;
  input.forEach((crops) => {
    total += crops["crop"].cost * crops.numCrops;
  });
  return total;
};

// Get Revenue For Crop

const getRevenueForCrop = (input) => {
  return input.crops[0].crop.salesPrice * getTotalYield(input);
};

console.log(getRevenueForCrop({ crops }));

// const getProfitForCrop = () => {};

// const  getTotalProfit = () => {};

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
};
