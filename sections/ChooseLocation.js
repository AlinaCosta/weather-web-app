const bucharest = document.querySelector('.bucharest');
const london = document.querySelector('.london');
const paris = document.querySelector('.paris');
const galati = document.querySelector('.galati');
const barcelona = document.querySelector('.barcelona');

function updateWeather(city) {
  localStorage.setItem('city', city);
  displayCurrentWeather(city);
  displayWeatherForecast(city);
}

bucharest.addEventListener('click', function () {
  updateWeather('Bucharest');
});
london.addEventListener('click', function () {
  updateWeather('London');
});
paris.addEventListener('click', function () {
  updateWeather('Paris');
});
galati.addEventListener('click', function () {
  updateWeather('Galati');
});
barcelona.addEventListener('click', function () {
  updateWeather('Barcelona');
});
