function displayPopularCities(city) {
  const bucharestEndpoint = getCurrentWeatherEndpoint(city);

  fetch(bucharestEndpoint)
    .then((response) => response.json())
    .then((data) => {
      const { main } = data;

      const temperature = Math.round(main.temp);

      switch (city) {
        case 'Bucharest':
          let bucharestTemp = document.querySelector('.bucharest-temp');
          bucharestTemp.innerHTML = `${temperature}°C`;
          break;
        case 'London':
          let londonTemp = document.querySelector('.london-temp');
          londonTemp.innerHTML = `${temperature}°C`;
          break;
        case 'Paris':
          let parisTemp = document.querySelector('.paris-temp');
          parisTemp.innerHTML = `${temperature}°C`;
          break;
        case 'Rome':
          let romeTemp = document.querySelector('.rome-temp');
          romeTemp.innerHTML = `${temperature}°C`;
          break;
        case 'Barcelona':
          let barcelonaTemp = document.querySelector('.barcelona-temp');
          barcelonaTemp.innerHTML = `${temperature}°C`;
          break;
      }
    });
}
