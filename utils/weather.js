//  conține funcții ce ajută în prelucrarea datelor despre vreme venite de la API
const windToKmPerHour = (metterPerSec) => metterPerSec * 3.6;
const visibilityToKm = (visibility) => visibility / 1000;
const getWeatherIcon = (iconCode) =>
  `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
