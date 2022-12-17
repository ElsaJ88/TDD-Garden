const {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
} = require("./farm");

describe("getYieldForPlant", () => {
  const corn = {
    name: "corn",
    yield: 30,
  };

  test("Get yield for plant with no environment factors", () => {
    expect(getYieldForPlant(corn)).toBe(30);
  });
});

describe("getYieldForCrop", () => {
  test("Get yield for crop, simple", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(getYieldForCrop(input)).toBe(30);
  });
});

describe("getTotalYield", () => {
  test("Calculate total yield with multiple crops", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];
    expect(getTotalYield({ crops })).toBe(23);
  });

  test("Calculate total yield with 0 amount", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const crops = [{ crop: corn, numCrops: 0 }];
    expect(getTotalYield({ crops })).toBe(0);
  });
});

// Get costs for Crop

describe("getCostsForCrop", () => {
  test("Cost for crop", () => {
    const corn = {
      name: "corn",
      yield: 3,
      salesPrice: 5,
      cost: 3,
    };
    const crops = [{ crop: corn, numCrops: 5 }];
    expect(getCostsForCrop(crops)).toBe(15);
  });
});

// Get Revenue For Crop
describe("getRevenueForCrop", () => {
  test("Revenue for crop", () => {
    const corn = {
      name: "corn",
      yield: 3,
      salesPrice: 5,
      cost: 3,
    };
    const crops = [{ crop: corn, numCrops: 5 }];
    expect(getRevenueForCrop({ crops })).toBe(75);
  });
});
