const bucharest = document.querySelector('.bucharest');
const london = document.querySelector('.london');
const paris = document.querySelector('.paris');
const rome = document.querySelector('.rome');
const barcelona = document.querySelector('.barcelona');

function updateWeather(city) {
  localStorage.setItem('city', city);
  displayCurrentWeather(city);
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
rome.addEventListener('click', function () {
  updateWeather('Rome');
});
barcelona.addEventListener('click', function () {
  updateWeather('Barcelona');
});
