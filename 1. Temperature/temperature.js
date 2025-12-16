function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

function displayTemperature(temperature, option) {

  // Check for missing parameters
  if (temperature === undefined || option === undefined) {
    console.log("Both temperature and option parameters are required.");
    return "Invalid temperature option provided.";
  }

  // Normalize the option input
  option = option.toLowerCase().slice(0,1);

  // Perform conversion based on the option
  if (option === 'c') {
    const fahrenheit = celsiusToFahrenheit(temperature);
    return `The temperature is ${temperature} degrees celsius, ${fahrenheit.toFixed(0)} degrees fahrenheit.`;
  } else if (option === 'f') {
    const celsius = fahrenheitToCelsius(temperature);
    return `The temperature is ${celsius.toFixed(0)} degrees celsius, ${temperature} degrees fahrenheit.`;
  } 

  // Handle invalid options
  else {
    return "Invalid temperature option provided.";
  }
}

module.exports = {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  displayTemperature
};
