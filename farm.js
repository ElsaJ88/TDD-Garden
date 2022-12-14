const getYieldForPlant = (input) => {
  console.log("getYieldForPlant input =", input);
  console.log("input.yield =", input.yield);
  return input.yield;
};

const getYieldForCrop = (input) => {
  console.log("getYieldForCrop input =", input);
  console.log("sum =", getYieldForPlant(input.crop) * input.numCrops);
  return getYieldForPlant(input.crop) * input.numCrops;
};

const getTotalYield = (input) => {
  let total = 0;
  input.crops.forEach((crops) => {
    total += getYieldForCrop(crops);
  });
  return total;
};

module.exports = { getYieldForPlant, getYieldForCrop, getTotalYield };
