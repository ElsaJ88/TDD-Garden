const {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
} = require("./farm");

// Variables used for test (if different variables and values are used, they're in the test itself)

const corn = {
  name: "corn",
  yield: 30,
  cost: 5,
  salesPrice: 4,
  factor: {
    sun: {
      low: -50,
      medium: 0,
      high: 50,
    },
    wind: {
      lots: -60,
      medium: -30,
      little: 0,
    },
  },
};

const pumpkin = {
  name: "pumpkin",
  yield: 4,
  cost: 7,
  salesPrice: 5,
  factor: {
    sun: {
      low: -25,
      medium: 0,
      high: 25,
    },
    wind: {
      lots: -60,
      medium: -30,
      little: 0,
    },
  },
};

const crops = [
  { crop: corn, numCrops: 5 },
  { crop: pumpkin, numCrops: 2 },
];

// Get yield for plant
describe("getYieldForPlant", () => {
  test("Get yield for plant with no environment factors", () => {
    expect(getYieldForPlant(corn)).toBe(30);
  });
});

// Get yield for crop
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

//Get Total Yield
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
    const crops = [{ crop: corn, numCrops: 0 }];
    expect(getTotalYield({ crops })).toBe(0);
  });
});

// Get costs for Crop
describe("getCostsForCrop", () => {
  test("Cost for crop", () => {
    const crops = [{ crop: corn, numCrops: 5 }];
    expect(getCostsForCrop({ crops })).toBe(25);
  });
});

// Get Revenue For Crop
describe("getRevenueForCrop", () => {
  test("Revenue for crop", () => {
    const crops = [{ crop: corn, numCrops: 5 }];
    expect(getRevenueForCrop({ crops })).toBe(600);
  });
});

// Get profit for crop
describe("getProfitForCrop", () => {
  test("Profit for crop", () => {
    const crops = [{ crop: corn, numCrops: 5 }];
    expect(getProfitForCrop({ crops })).toBe(575);
  });
});

// Get total profit
describe("getTotalProfit", () => {
  test("Total profit", () => {
    const corn = {
      name: "corn",
      yield: 3,
      cost: 2,
      salesPrice: 4,
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
      cost: 2,
      salesPrice: 4,
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];
    expect(getTotalProfit({ crops })).toBe(78);
  });
});

// Get yield for plant with environmental factors
describe("getYieldforPlant", () => {
  test("Get yield for plant with environmental facors", () => {
    const environmentFactors = {
      sun: "low",
    };
    expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
  });
});

// Get yield for crop with environmental factors
describe("getYieldforCrop", () => {
  test("Get yield for crop with environmental facors", () => {
    const environmentFactors = {
      sun: "low",
    };

    const input = {
      crop: corn,
      numCrops: 10,
    };
    expect(getYieldForCrop(input, environmentFactors)).toBe(150);
  });
});

// Get total yield with environmental factors
describe("getTotalYield", () => {
  test("Get total yield with environmental facors", () => {
    const environmentFactors = {
      sun: "low",
    };
    expect(getTotalYield({ crops }, environmentFactors)).toBe(81);
  });
});

// Get revenue for crop with environmental factors
describe("getRevenueForCrop", () => {
  test("Get revenue for crop with environmental facors", () => {
    const environmentFactors = {
      sun: "high",
    };
    const crops = [{ crop: pumpkin, numCrops: 4 }];
    expect(getRevenueForCrop({ crops }, environmentFactors)).toBe(100);
  });
});

// Get profit for crop with environmental factors
describe("getProfitForCrop", () => {
  test("Get profit for crop with environmental facors", () => {
    const environmentFactors = {
      sun: "medium",
    };
    const crops = [{ crop: corn, numCrops: 3 }];
    expect(getProfitForCrop({ crops }, environmentFactors)).toBe(345);
  });
});

// Get total profit with environmental factors
describe("getTotalProfit", () => {
  test("Get total profit with environmental facors", () => {
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 4 },
    ];
    const environmentFactors = {
      wind: "lots",
      sun: "high",
    };
    expect(getProfitForCrop({ crops }, environmentFactors)).toBe(347);
  });
});
