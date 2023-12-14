// este primul fișier care execută instrucțiuni ce duc la afișarea de informații pe ecran
// este responsabil de afișarea pe ecran a datelor ce țin de JavaScript

let currentCity = localStorage.getItem('city');

if (!currentCity) {
  localStorage.setItem('city', 'Bucharest');
  currentCity = 'Bucharest';
}

displayCurrentWeather(currentCity);
displayPopularCities('Bucharest');
displayPopularCities('London');
displayPopularCities('Paris');
displayPopularCities('Rome');
displayPopularCities('Barcelona');
