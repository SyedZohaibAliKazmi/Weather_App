const form = document.querySelector("#myform");
const container = document.querySelector(".container");
const search = document.querySelector(".search-box");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const btn = document.querySelector("#btn");
const image = document.querySelector(".weather-box  img");
const temperature = document.querySelector(".weather-box .temperature");
const description = document.querySelector(".weather-box .description");
const humidity = document.querySelector(".weather-details .humidity");
const wind = document.querySelector(".weather-details .Wind");
const Error404 = document.querySelector(".notFound");
const API_Key = "107f0a4900fe176149bf71880f2351a2";

const formHandler = async (event) => {
  event.preventDefault();
  // =================== for empty display for next loading===============
  image.innerHTML = "";
  switch ("") {
    case "":
      image.src = "./images/load.gif";
      break;
  }
  temperature.innerText = "loading...";
  feelsLike.innerHTML = "";
  description.innerHTML = "";
  infoHumidity.innerHTML = "";
  infoWind.innerHTML = "";
  btn.disabled = true;
  const city = document.querySelector(".search-box input").value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`
  )
    .then((response) => response.json())
    .then((json) => {
      if (json.cod == "404") {
        container.style.height = "400px";
        weatherBox.classList.remove("active");
        weatherDetails.classList.remove("active");
        Error404.classList.add("active");
        return;
      }
      container.style.height = "555px";
      weatherBox.classList.add("active");
      weatherDetails.classList.add("active");
      Error404.classList.remove("active");

      //   const image = document.querySelector(".weather-box  img");
      //   const temperature = document.querySelector(".weather-box .temperature");
      //   const description = document.querySelector(".weather-box .description");
      //   const humidity = document.querySelector(".weather-details .humidity");
      //   const wind = document.querySelector(".weather-details .Wind");

      switch (json.weather[0].main) {
        case "Clear":
          image.src = "images/clear.png";
          break;

        case "Clear Sky":
          image.src = "images/clear.png";
          break;

        case "Rain":
          image.src = "images/rain.png";
          break;

        case "Snow":
          image.src = "images/snow.png";
          break;

        case "Clouds":
          image.src = "images/cloud.png";
          break;

        case "Mist":
          image.src = "images/mist.png";
          break;

        case "Haze":
          image.src = "images/mist.png";
          break;

        default:
          image.src = images / Welcome.png;
      }
      temperature.innerHTML = `${parseInt(json.main.temp)}°C`;
      feelsLike.innerHTML = `Feels Like: ${parseInt(json.main.feels_like)}°C`;
      description.innerHTML = `${json.weather[0].main}`;
      infoHumidity.innerHTML = `${parseInt(json.main.humidity)}% `;
      infoWind.innerHTML = `${parseInt(json.wind.speed)}km/h`;
      btn.disabled = false;
    });
};
form.addEventListener("submit", formHandler);
