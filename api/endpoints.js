const API_KEY = 'b27511877ee49c5206547d2fcc6e401a';

function getCurrentWeatherEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&appid=${API_KEY}`;

  // return `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`;
}
function getForecastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}
