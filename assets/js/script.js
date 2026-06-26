// ===============================
// 🧠 VUNA Calculator — script.js
// Author: Japhet
// ===============================

let LAST_RESULT = 0;
var currentExpression = "";

// ------------------------------
// Theme Toggle
// ------------------------------
function toggleTheme() {
  const isDark = document.body.classList.toggle("dark");
  const btn = document.getElementById("theme-toggle");
  btn.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("vuna-theme", isDark ? "dark" : "light");
}

window.addEventListener("DOMContentLoaded", function () {
  const saved = localStorage.getItem("vuna-theme");
  const btn = document.getElementById("theme-toggle");
  if (saved === "dark") {
    document.body.classList.add("dark");
    if (btn) btn.textContent = "☀️";
  }
  // Initialise unit converter inputs
  renderUnitInputs(document.getElementById("unitCategory")?.value || "length");
});

// ------------------------------
// Calculator Core
// ------------------------------
function appendToResult(value) {
  currentExpression += value.toString();
  updateDisplay();
}

function bracketToResult(value) {
  currentExpression += value;
  updateDisplay();
}

function backspace() {
  currentExpression = currentExpression.slice(0, -1);
  updateDisplay();
}

function operatorToResult(value) {
  currentExpression += value === "^" ? "**" : value;
  updateDisplay();
}

function clearResult() {
  currentExpression = "";
  updateDisplay();
}

function normalizeExpression(expr) {
  return expr
    .replace(/\bpi\b/g, "Math.PI")
    .replace(/\be\b/g, "Math.E");
}

function calculateExpression(expression) {
  try {
    let norm = normalizeExpression(expression);
    norm = norm.replace(/\bans\b/gi, LAST_RESULT);
    const result = eval(norm);
    if (isNaN(result) || !isFinite(result)) throw new Error();
    return result;
  } catch {
    return "Error";
  }
}

function calculateResult() {
  if (!currentExpression) return;
  let result = calculateExpression(currentExpression);
  result = String(result);
  LAST_RESULT = result;
  currentExpression = result;
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById("result");
  if (display) display.value = currentExpression || "0";
}

// ------------------------------
// ⚖️  UNIT CONVERTER MODAL
// ------------------------------

const UNIT_CATEGORIES = {
  length: {
    label: "Length",
    icon: "📏",
    conversions: [
      { label: "km → miles",   fn: (v) => MathLib.kmToMiles(v),   from: "km",    to: "miles"  },
      { label: "miles → km",   fn: (v) => MathLib.milesToKm(v),   from: "miles", to: "km"     },
      { label: "m → feet",     fn: (v) => MathLib.mToFt(v),       from: "m",     to: "ft"     },
      { label: "feet → m",     fn: (v) => MathLib.ftToM(v),       from: "ft",    to: "m"      },
      { label: "cm → inches",  fn: (v) => MathLib.cmToInches(v),  from: "cm",    to: "in"     },
      { label: "inches → cm",  fn: (v) => MathLib.inchesToCm(v),  from: "in",    to: "cm"     },
    ],
  },
  temperature: {
    label: "Temperature",
    icon: "🌡️",
    conversions: [
      { label: "°C → °F",    fn: (v) => MathLib.celsiusToFahrenheit(v), from: "°C", to: "°F" },
      { label: "°F → °C",    fn: (v) => MathLib.fahrenheitToCelsius(v), from: "°F", to: "°C" },
      { label: "°C → K",     fn: (v) => MathLib.celsiusToKelvin(v),     from: "°C", to: "K"  },
      { label: "K → °C",     fn: (v) => MathLib.kelvinToCelsius(v),     from: "K",  to: "°C" },
    ],
  },
  weight: {
    label: "Weight",
    icon: "⚖️",
    conversions: [
      { label: "kg → lbs",  fn: (v) => MathLib.kgToLbs(v),  from: "kg",  to: "lbs" },
      { label: "lbs → kg",  fn: (v) => MathLib.lbsToKg(v),  from: "lbs", to: "kg"  },
      { label: "g → oz",    fn: (v) => MathLib.gToOz(v),    from: "g",   to: "oz"  },
      { label: "oz → g",    fn: (v) => MathLib.ozToG(v),    from: "oz",  to: "g"   },
    ],
  },
  speed: {
    label: "Speed",
    icon: "🚀",
    conversions: [
      { label: "kph → mph",   fn: (v) => MathLib.kphToMph(v),  from: "kph", to: "mph" },
      { label: "mph → kph",   fn: (v) => MathLib.mphToKph(v),  from: "mph", to: "kph" },
      { label: "m/s → kph",   fn: (v) => MathLib.mpsToKph(v),  from: "m/s", to: "kph" },
      { label: "kph → m/s",   fn: (v) => MathLib.kphToMps(v),  from: "kph", to: "m/s" },
    ],
  },
  data: {
    label: "Data",
    icon: "💾",
    conversions: [
      { label: "MB → GB",  fn: (v) => MathLib.mbToGb(v),  from: "MB", to: "GB" },
      { label: "GB → MB",  fn: (v) => MathLib.gbToMb(v),  from: "GB", to: "MB" },
      { label: "GB → TB",  fn: (v) => MathLib.gbToTb(v),  from: "GB", to: "TB" },
      { label: "TB → GB",  fn: (v) => MathLib.tbToGb(v),  from: "TB", to: "GB" },
    ],
  },
};

function openUnitModal() {
  const modal = new bootstrap.Modal(document.getElementById("unitModal"));
  modal.show();
}

function renderUnitInputs(category) {
  const cat = UNIT_CATEGORIES[category];
  if (!cat) return;

  const select = document.getElementById("conversionType");
  select.innerHTML = cat.conversions
    .map((c, i) => `<option value="${i}">${c.label}</option>`)
    .join("");

  updateUnitLabels(category, 0);
}

function updateUnitLabels(category, idx) {
  const cat = UNIT_CATEGORIES[category];
  const conv = cat.conversions[idx];
  const fromLbl = document.getElementById("fromLabel");
  const toLbl   = document.getElementById("toLabel");
  if (fromLbl) fromLbl.textContent = conv.from;
  if (toLbl)   toLbl.textContent   = conv.to;
}

document.addEventListener("change", function (e) {
  if (e.target.id === "unitCategory") {
    renderUnitInputs(e.target.value);
    document.getElementById("unitResult").classList.add("d-none");
  }
  if (e.target.id === "conversionType") {
    const cat = document.getElementById("unitCategory").value;
    updateUnitLabels(cat, parseInt(e.target.value));
    document.getElementById("unitResult").classList.add("d-none");
  }
});

function computeUnit() {
  const category = document.getElementById("unitCategory").value;
  const idx      = parseInt(document.getElementById("conversionType").value);
  const rawVal   = document.getElementById("unitValue").value;
  const value    = parseFloat(rawVal);

  if (isNaN(value)) {
    alert("Please enter a valid number.");
    return;
  }

  const cat    = UNIT_CATEGORIES[category];
  const conv   = cat.conversions[idx];
  const result = Number(conv.fn(value).toFixed(6));

  LAST_RESULT = result;
  currentExpression = result.toString();
  updateDisplay();

  const box = document.getElementById("unitResult");
  box.classList.remove("d-none");
  box.innerHTML = `<span class="unit-from">${value} ${conv.from}</span>
    <span class="unit-arrow">→</span>
    <span class="unit-to">${result} ${conv.to}</span>`;
}