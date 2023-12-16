//  conține funcții ce ajută în prelucrarea datelor despre vreme venite de la API
const windToKmPerHour = (metterPerSec) => metterPerSec * 3.6;
const visibilityToKm = (visibility) => visibility / 1000;
const getWeatherIcon = (iconCode) => {
  let icon;
  switch (iconCode) {
    case '01d':
      icon = `bi-brightness-high-fill`;
      break;
    case '01n':
      icon = `bi-moon-stars-fill`;
      break;
    case '02d':
      icon = `bi-cloud-sun-fill`;
      break;
    case '02n':
      icon = `bi-cloud-moon-fill`;
      break;
    case '03d':
    case '03n':
      icon = `bi-cloudy-fill`;
      break;
    case '04d':
    case '04n':
      icon = `bi-clouds-fill`;
      break;
    case '09d':
    case '09n':
      icon = `bi-cloud-drizzle-fill`;
      break;
    case '10d':
    case '10n':
      icon = `bi-cloud-rain-fill`;
      break;
    case '11d':
    case '11n':
      icon = `bi-cloud-lightning-fill`;
      break;
    case '13d':
    case '13n':
      icon = `bi-snow2`;
      break;
    case '50d':
    case '50n':
      icon = `bi-cloud-fog2-fill`;
      break;
    default:
      throw new Error('Icon code not found.');
  }
  return icon;
};
