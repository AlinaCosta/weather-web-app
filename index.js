let currentCity = localStorage.getItem('city');

if (!currentCity) {
  localStorage.setItem('city', 'Bucharest');
  currentCity = 'Bucharest';
}

displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);
displayPopularCities('Bucharest');
displayPopularCities('London');
displayPopularCities('Paris');
displayPopularCities('Galati');
displayPopularCities('Barcelona');
