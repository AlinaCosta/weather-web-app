function displayWeatherForecast(city) {
  const forecastEndpoint = getForecastEndpoint(city);

  let weatherForecast = document.querySelector('.weather-forecast');
  weatherForecast.innerHTML = '';

  fetch(forecastEndpoint)
    .then((response) => response.json())
    .then((data) => {
      const { list } = data;
      const daysMap = {};

      list.forEach((element) => {
        const { dt } = element;
        const day = getDayOfTheWeek(dt);
        if (daysMap[day]) {
          daysMap[day].push(element);
        } else {
          daysMap[day] = [element];
        }
      });

      for (key in daysMap) {
        weatherForecast.innerHTML += `<h2 class="fs-6 ms-1 text-uppercase text-white w-100">${key}</h2>`;
        let days = daysMap[key];
        days.forEach((element) => {
          const { dt, main, weather } = element;
          const hour = getHour(dt);
          const temperature = Math.round(main.temp);
          const weatherIcon = getWeatherIcon(weather[0].icon);
          weatherForecast.innerHTML += `
              <div class=" d-flex flex-column flex-grow-1 justify-content-center align-items-center shadow p-3 mb-3">
              <p class="h6 hour">${hour}</p>
              <span class="my-1"><i class="bi bi-brightness-high-fill"></i></span>
              <p class="grade">${temperature}°C</p>
            </div>
           `;
        });
      }
    });
}
