// ===============================
// 🧪 VUNA Calculator — math.test.js
// Author: Japhet
// ===============================

const MathLib = require("../assets/js/math");

// ── BASIC ARITHMETIC ──────────────────────────────────────────────────────────
describe("Basic Calculator Functions", () => {
  test("adds numbers correctly", () => {
    expect(MathLib.add(2, 3)).toBe(5);
  });

  test("subtracts numbers correctly", () => {
    expect(MathLib.subtract(10, 4)).toBe(6);
  });

  test("multiplies numbers correctly", () => {
    expect(MathLib.multiply(3, 4)).toBe(12);
  });

  test("divides numbers correctly", () => {
    expect(MathLib.divide(10, 2)).toBe(5);
  });

  test("throws on division by zero", () => {
    expect(() => MathLib.divide(5, 0)).toThrow("Division by zero");
  });
});

// ── UNIT CONVERTER: LENGTH ────────────────────────────────────────────────────
describe("Unit Converter — Length", () => {
  test("km to miles", () => {
    expect(MathLib.kmToMiles(1)).toBeCloseTo(0.621371, 4);
  });

  test("miles to km", () => {
    expect(MathLib.milesToKm(1)).toBeCloseTo(1.60934, 4);
  });

  test("metres to feet", () => {
    expect(MathLib.mToFt(1)).toBeCloseTo(3.28084, 4);
  });

  test("feet to metres", () => {
    expect(MathLib.ftToM(1)).toBeCloseTo(0.3048, 4);
  });

  test("cm to inches", () => {
    expect(MathLib.cmToInches(1)).toBeCloseTo(0.393701, 4);
  });

  test("inches to cm", () => {
    expect(MathLib.inchesToCm(1)).toBeCloseTo(2.54, 4);
  });
});

// ── UNIT CONVERTER: TEMPERATURE ───────────────────────────────────────────────
describe("Unit Converter — Temperature", () => {
  test("0°C is 32°F", () => {
    expect(MathLib.celsiusToFahrenheit(0)).toBe(32);
  });

  test("100°C is 212°F", () => {
    expect(MathLib.celsiusToFahrenheit(100)).toBe(212);
  });

  test("32°F is 0°C", () => {
    expect(MathLib.fahrenheitToCelsius(32)).toBe(0);
  });

  test("0°C is 273.15 K", () => {
    expect(MathLib.celsiusToKelvin(0)).toBe(273.15);
  });

  test("273.15 K is 0°C", () => {
    expect(MathLib.kelvinToCelsius(273.15)).toBe(0);
  });
});

// ── UNIT CONVERTER: WEIGHT ────────────────────────────────────────────────────
describe("Unit Converter — Weight", () => {
  test("kg to lbs", () => {
    expect(MathLib.kgToLbs(1)).toBeCloseTo(2.20462, 4);
  });

  test("lbs to kg", () => {
    expect(MathLib.lbsToKg(1)).toBeCloseTo(0.453592, 4);
  });

  test("g to oz", () => {
    expect(MathLib.gToOz(100)).toBeCloseTo(3.5274, 3);
  });

  test("oz to g", () => {
    expect(MathLib.ozToG(1)).toBeCloseTo(28.3495, 3);
  });
});

// ── UNIT CONVERTER: SPEED ─────────────────────────────────────────────────────
describe("Unit Converter — Speed", () => {
  test("100 kph to mph", () => {
    expect(MathLib.kphToMph(100)).toBeCloseTo(62.1371, 3);
  });

  test("60 mph to kph", () => {
    expect(MathLib.mphToKph(60)).toBeCloseTo(96.5604, 3);
  });

  test("10 m/s to kph", () => {
    expect(MathLib.mpsToKph(10)).toBeCloseTo(36, 2);
  });

  test("36 kph to m/s", () => {
    expect(MathLib.kphToMps(36)).toBeCloseTo(10, 2);
  });
});

// ── UNIT CONVERTER: DATA ──────────────────────────────────────────────────────
describe("Unit Converter — Data", () => {
  test("1024 MB is 1 GB", () => {
    expect(MathLib.mbToGb(1024)).toBe(1);
  });

  test("1 GB is 1024 MB", () => {
    expect(MathLib.gbToMb(1)).toBe(1024);
  });

  test("1024 GB is 1 TB", () => {
    expect(MathLib.gbToTb(1024)).toBe(1);
  });

  test("1 TB is 1024 GB", () => {
    expect(MathLib.tbToGb(1)).toBe(1024);
  });
});