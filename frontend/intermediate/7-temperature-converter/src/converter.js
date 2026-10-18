
export function convertTemperature(value, fromUnit, toUnit) {
  let celsius;

  // Step 1: Convert the input to Celsius
  if (fromUnit === "celsius") {
    celsius = value;
  } else if (fromUnit === "fahrenheit") {
    celsius = (value - 32) * 5 / 9;
  } else if (fromUnit === "kelvin") {
    celsius = value - 273.15;
  }

  // Step 2: Convert Celsius to the target unit
  let result;

  if (toUnit === "celsius") {
    result = celsius;
  } else if (toUnit === "fahrenheit") {
    result = (celsius * 9 / 5) + 32;
  } else if (toUnit === "kelvin") {
    result = celsius + 273.15;
  }

  return result;
}