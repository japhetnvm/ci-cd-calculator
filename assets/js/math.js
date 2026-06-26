// ===============================
// 🧮 VUNA MathLib
// Core arithmetic + Unit Converter
// Author: Japhet
// ===============================

const MathLib = {

  // ── BASIC ARITHMETIC ──────────────────────
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
  },

  // ── UNIT CONVERTER ────────────────────────

  // Length
  kmToMiles(km) {
    return km * 0.621371;
  },
  milesToKm(miles) {
    return miles * 1.60934;
  },
  mToFt(m) {
    return m * 3.28084;
  },
  ftToM(ft) {
    return ft * 0.3048;
  },
  cmToInches(cm) {
    return cm * 0.393701;
  },
  inchesToCm(inches) {
    return inches * 2.54;
  },

  // Temperature
  celsiusToFahrenheit(c) {
    return (c * 9) / 5 + 32;
  },
  fahrenheitToCelsius(f) {
    return ((f - 32) * 5) / 9;
  },
  celsiusToKelvin(c) {
    return c + 273.15;
  },
  kelvinToCelsius(k) {
    return k - 273.15;
  },

  // Weight
  kgToLbs(kg) {
    return kg * 2.20462;
  },
  lbsToKg(lbs) {
    return lbs * 0.453592;
  },
  gToOz(g) {
    return g * 0.035274;
  },
  ozToG(oz) {
    return oz * 28.3495;
  },

  // Speed
  kphToMph(kph) {
    return kph * 0.621371;
  },
  mphToKph(mph) {
    return mph * 1.60934;
  },
  mpsToKph(mps) {
    return mps * 3.6;
  },
  kphToMps(kph) {
    return kph / 3.6;
  },

  // Data
  mbToGb(mb) {
    return mb / 1024;
  },
  gbToMb(gb) {
    return gb * 1024;
  },
  gbToTb(gb) {
    return gb / 1024;
  },
  tbToGb(tb) {
    return tb * 1024;
  },
};

// CommonJS export (for Jest tests)
if (typeof module !== "undefined" && module.exports) {
  module.exports = MathLib;
}