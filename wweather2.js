// Selector Variables
var inputval = document.querySelector("#cityinput");
var btn = document.querySelector("#add");
var city = document.querySelector("#cityoutput");
var description = document.querySelector("#description");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");

// OpenWeatherMap API Key
var apik = "6b8b1e409abf0f1c6a61f62e09b3c83a";

// Kelvin to Celsius Conversion Function
function convertToCelsius(val) {
  return (val - 273.15).toFixed(2);
}

// Fetch Weather Data
btn.addEventListener("click", function () {
  var cityName = inputval.value.trim(); // Trim to remove extra spaces

  if (cityName === "") {
    alert("Please enter a city name!");
    return;
  }

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apik
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.cod === "404") {
        alert("City not found. Please enter a valid city name.");
        return;
      }

      var nameval = data.name;
      var descrip = data.weather[0].description;
      var temperature = data.main.temp;
      var windSpeed = data.wind.speed;

      city.innerHTML = `City: ${nameval}`;
      temp.innerHTML = `Temperature: ${convertToCelsius(temperature)}°C`;
      description.innerHTML = `Conditions: ${descrip}`;
      wind.innerHTML = `Wind Speed: ${windSpeed} km/h`;
    })
    .catch((err) =>
      alert("An error occurred while fetching the weather data.")
    );
});
