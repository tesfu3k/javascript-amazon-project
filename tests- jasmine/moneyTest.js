import formatCurrency from "../scripts/utils/money.js";

describe("test suite: formatCurrency", () => {
  it("convert cents into dollars", () => {
    expect(formatCurrency(2095)).toEqual("20.95");
  });

  it("work with 0", () => {
    expect(formatCurrency(0)).toEqual("0.00");
  });

  it("round up to the nearst cent", () => {
    expect(formatCurrency(2000.5)).toEqual("20.01");
  });

  it("round down to the nearst cent", () => {
    expect(formatCurrency(2000.4)).toEqual("20.00");
  });
});
