// https://calculator.swiftutors.com/thermal-conductivity-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const thermalConductivityRadio = document.getElementById('thermalConductivityRadio');
const quantityofHeatRadio = document.getElementById('quantityofHeatRadio');
const distanceRadio = document.getElementById('distanceRadio');
const areaRadio = document.getElementById('areaRadio');
const temperatureGradientRadio = document.getElementById('temperatureGradientRadio');

let thermalConductivity;
let quantityofHeat = v1;
let distance = v2;
let area = v3;
let temperatureGradient = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

thermalConductivityRadio.addEventListener('click', function() {
  variable1.textContent = '(Q) Quantity of Heat (cal)';
  variable2.textContent = '(L) Distance (sec)';
  variable3.textContent = '(A) Area (cm²)';
  variable4.textContent = '(ΔT) Temperature Gradient (°C/cm)';
  quantityofHeat = v1;
  distance = v2;
  area = v3;
  temperatureGradient = v4;
  result.textContent = '';
});

quantityofHeatRadio.addEventListener('click', function() {
  variable1.textContent = '(λ) Thermal Conductivity ((cal/sec)/(cm², °C/cm))';
  variable2.textContent = '(L) Distance (sec)';
  variable3.textContent = '(A) Area (cm²)';
  variable4.textContent = '(ΔT) Temperature Gradient (°C/cm)';
  thermalConductivity = v1;
  distance = v2;
  area = v3;
  temperatureGradient = v4;
  result.textContent = '';
});

distanceRadio.addEventListener('click', function() {
  variable1.textContent = '(λ) Thermal Conductivity ((cal/sec)/(cm², °C/cm))';
  variable2.textContent = '(Q) Quantity of Heat (cal)';
  variable3.textContent = '(A) Area (cm²)';
  variable4.textContent = '(ΔT) Temperature Gradient (°C/cm)';
  thermalConductivity = v1;
  quantityofHeat = v2;
  area = v3;
  temperatureGradient = v4;
  result.textContent = '';
});

areaRadio.addEventListener('click', function() {
  variable1.textContent = '(λ) Thermal Conductivity ((cal/sec)/(cm², °C/cm))';
  variable2.textContent = '(Q) Quantity of Heat (cal)';
  variable3.textContent = '(L) Distance (sec)';
  variable4.textContent = '(ΔT) Temperature Gradient (°C/cm)';
  thermalConductivity = v1;
  quantityofHeat = v2;
  distance = v3;
  temperatureGradient = v4;
  result.textContent = '';
});

temperatureGradientRadio.addEventListener('click', function() {
  variable1.textContent = '(λ) Thermal Conductivity ((cal/sec)/(cm², °C/cm))';
  variable2.textContent = '(Q) Quantity of Heat (cal)';
  variable3.textContent = '(L) Distance (sec)';
  variable4.textContent = '(A) Area (cm²)';
  thermalConductivity = v1;
  quantityofHeat = v2;
  distance = v3;
  area = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(thermalConductivityRadio.checked)
    result.textContent = `Thermal Conductivity = ${computeThermalConductivity().toFixed(2)} ((cal/sec)/(cm², °C/cm))`;

  else if(quantityofHeatRadio.checked)
    result.textContent = `Quantity of Heat = ${computeQuantityofHeat().toFixed(2)} cal`;

  else if(distanceRadio.checked)
    result.textContent = `Distance = ${computeDistance().toFixed(2)} sec`;

  else if(areaRadio.checked)
    result.textContent = `Area = ${computeArea().toFixed(2)} cm²`;

  else if(temperatureGradientRadio.checked)
    result.textContent = `Temperature Gradient = ${computeTemperatureGradient().toFixed(2)} °C/cm`;
})

// calculation

function computeThermalConductivity() {
  return (Number(quantityofHeat.value) * Number(distance.value)) / (Number(area.value) * Number(temperatureGradient.value));
}

function computeQuantityofHeat() {
  return (Number(thermalConductivity.value) * Number(area.value) * Number(temperatureGradient.value)) / Number(distance.value);
}

function computeDistance() {
  return (Number(thermalConductivity.value) * Number(area.value) * Number(temperatureGradient.value)) / Number(quantityofHeat.value);
}

function computeArea() {
  return (Number(quantityofHeat.value) * Number(distance.value)) / (Number(thermalConductivity.value) * Number(temperatureGradient.value));
}

function computeTemperatureGradient() {
  return (Number(quantityofHeat.value) * Number(distance.value)) / (Number(thermalConductivity.value) * Number(area.value));
}