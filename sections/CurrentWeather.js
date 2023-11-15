// Adăugarea funcției de afișare a detaliilor despre vreme la momentul curent.
// Declararea functiei pentru afisarea vremii curente. Apelul se face in alte fisiere.
function displayCurrentWeather() {
  // Generam link-ul serverului, pe baza orasului.
  const currentWeatherEndpoint = getCurrentWeatherEndpoint('București');

  fetch(currentWeatherEndpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const { name, dt, main, weather, wind } = data;

      const day = getDayOfTheWeek(dt);
      const hours = getHour(dt);
      const month = getMonth(dt);
      const temperature = Math.round(main.temp);
      const realFeel = Math.round(main.feels_like);
      const weatherDescription = weather[0].description;
      // const weatherIcon = getWeatherIcon(weather[0].icon);
      const windSpeed = windToKmPerHour(Math.round(wind.speed));
      const humidity = main.humidity;

      // Selectam div cu clasa current-weather
      // Folosing innerHtml si string interpolation injecteaza datele in acest div

      let currentWeather = document.querySelector('.current-weather');
      currentWeather.innerHTML = `
      <img
              src="images/orange.jpg"
              class="card-img img-fluid h-100"
              alt="..."
            />
            <div class="card-img-overlay text-dark text-center pt-5">
              <div class="my-5">
                <h1 class="display-4 m-0 pt-3">${name}</h1>
                <p class="fs-5 mt-2">${day}, ${month}, ${hours}</p>
              </div>
              <div
                class="d-flex gap-3 justify-content-center align-items-center my-4"
              >
                <p class="display-2">${temperature}°C</p>
                <img
                  src="images/sun.png"
                  class="img-fluid w-25 px-5 py-3"
                  alt="sun icon"
                />
                <div class="d-flex flex-column gap-2 fw-semibold fs-5">
                  <div class="d-flex gap-2">
                    <p>Real Feel:</p>
                    <p>${realFeel}°C</p>
                  </div>
                  <div class="d-flex gap-2">
                    <p>Wind:</p>
                    <p>${windSpeed} km/h</p>
                  </div>
                  <div class="d-flex gap-2">
                    <p>Humidity:</p>
                    <p>${humidity}%</p>
                  </div>
                </div>
              </div>
              <p class="fs-5 fw-semibold">${weatherDescription}</p>
            </div>`;
    });
}
