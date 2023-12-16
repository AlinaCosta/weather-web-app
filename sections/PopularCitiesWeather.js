function displayPopularCities(city) {
  const bucharestEndpoint = getCurrentWeatherEndpoint(city);

  fetch(bucharestEndpoint)
    .then((response) => response.json())
    .then((data) => {
      const { main, weather } = data;

      const temperature = Math.round(main.temp);
      const weatherIcon = getWeatherIcon(weather[0].icon);

      let bucharestTemp = document.querySelector('.bucharest-temp');
      let londonTemp = document.querySelector('.london-temp');
      let parisTemp = document.querySelector('.paris-temp');
      let romeTemp = document.querySelector('.rome-temp');
      let barcelonaTemp = document.querySelector('.barcelona-temp');

      let bucharestIcon = document.querySelector('.bucharest-icon');
      let londonIcon = document.querySelector('.london-icon');
      let parisIcon = document.querySelector('.paris-icon');
      let romeIcon = document.querySelector('.rome-icon');
      let barcelonaIcon = document.querySelector('.barcelona-icon');

      switch (city) {
        case 'Bucharest':
          bucharestTemp.innerHTML = `${temperature}°C`;
          bucharestIcon.innerHTML = `<i class="bi ${weatherIcon}"></i
          >`;
          break;
        case 'London':
          londonTemp.innerHTML = `${temperature}°C`;
          londonIcon.innerHTML = `<i class="bi ${weatherIcon}"></i
          >`;
          break;
        case 'Paris':
          parisTemp.innerHTML = `${temperature}°C`;
          parisIcon.innerHTML = `<i class="bi ${weatherIcon}"></i
          >`;
          break;
        case 'Rome':
          romeTemp.innerHTML = `${temperature}°C`;
          romeIcon.innerHTML = `<i class="bi ${weatherIcon}"></i
          >`;
          break;
        case 'Barcelona':
          barcelonaTemp.innerHTML = `${temperature}°C`;
          barcelonaIcon.innerHTML = `<i class="bi ${weatherIcon}"></i
          >`;
          break;
        default:
          throw new Error('City not found.');
      }
    });
}
