function displayCurrentWeather(city) {
  const currentWeatherEndpoint = getCurrentWeatherEndpoint(city);

  fetch(currentWeatherEndpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const { name, dt, sys, main, weather, visibility, wind } = data;

      const day = getDayOfTheWeek(dt);
      const hours = getHour(dt);
      const temperature = Math.round(main.temp);
      const realFeel = Math.round(main.feels_like);
      const weatherDescription = weather[0].description;
      const weatherIcon = getWeatherIcon(weather[0].icon);
      const windSpeed = windToKmPerHour(Math.round(wind.speed));
      const humidity = main.humidity;
      const pressure = main.pressure;
      const weatherVisibility = visibilityToKm(visibility);
      const sunrise = getHour(sys.sunrise);
      const sunset = getHour(sys.sunset);

      let currentWeather = document.querySelector('.current-weather');
      let todayHighlights = document.querySelector('.today-highlights');

      currentWeather.innerHTML = `
                <h1 class="display-4 m-0 mt-md-1 mt-3 city-name">${name}</h1>
                <p class="fs-4 mt-2">${day}, ${hours}</p>
                <div class="d-flex align-items-baseline gap-2 mt-3">
                  <span class="my-1"
                    ><i class="bi ${weatherIcon} display-1"></i
                  ></span>
                  <p class="display-1">${temperature}°C</p>
                </div>
                <p class="fs-5">${weatherDescription}</p>`;

      todayHighlights.innerHTML = `
            <h2 class="fs-6 mb-3 ms-1 text-uppercase text-white">
              Today's Highlights
            </h2>
            <div class="d-flex flex-wrap gap-2 gap-xl-3 today-highlights__cards">
              <div class="card text-center">
                <p class="field-name text-start">Real Feel</p>
                <p class="fs-1">
                  <i class="bi ${weatherIcon}"></i> ${realFeel}°C
                </p>
                <p class="mb-0">${weatherDescription}</p>
              </div>
              <div class="card text-center">
                <p class="field-name text-start">Wind status</p>
                <p class="fs-2">${windSpeed} km/h</p>
                <span><i class="bi bi-wind"></i></span>
              </div>
              <div class="card text-center">
                <p class="field-name text-start">Sunrise & Sunset</p>
                <p class="fs-5 mt-1 mb-0">
                  <i class="bi bi-sunrise-fill pe-2"></i>${sunrise}
                </p>
                <p class="fs-5 mb-0"><i class="bi bi-sunset-fill pe-2"></i>${sunset}</p>
              </div>
              <div class="card text-center">
                <p class="field-name text-start">Humidity</p>
                <p class="fs-2">${humidity}%</p>
                <span><i class="bi bi-moisture"></i></span>
              </div>
              <div class="card text-center">
                <p class="field-name text-start">Vizibility</p>
                <p class="fs-2">${weatherVisibility} km</p>
                <span><i class="bi bi-eye-fill"></i></span>
              </div>
              <div class="card text-center">
                <p class="field-name text-start">Pressure</p>
                <p class="fs-2">${pressure} mb</p>
                <span><i class="bi bi-speedometer"></i></span>
              </div>
            </div>`;
    });
}
