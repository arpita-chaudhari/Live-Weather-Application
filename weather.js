//selector variable
var inputval = document.querySelector("#cityinput");
var btn = document.querySelector("#add");
var city = document.querySelector("#cityoutput");
var descrip = document.querySelector("#description");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");

apik = "6b8b1e409abf0f1c6a61f62e09b3c83a";
//kelvin to celcius
function convertion(val) {
  return (val - 273).toFixed(2);
}
//fetch
btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputval.value +
      "&appid=" 
       
  )
    .then((res) => res.json())
    //.then(data => console.log(data))
    .then((data) => {
      var nameval = data["name"];
      var descrip = data["weather"]["0"]["description"];
      var tempature = data["main"]["temp"];
      var wndspd = data["wind"]["speed"];

      city.innerHTML = `City: ${nameval}`;
      temp.innerHTML = `Temperature: ${convertion(tempature)} C`;
      description.innerHTML = `Conditions: ${descrip}`;
      wind.innerHTML = `Wind Speed: ${wndspd} km/h`;
    })
    .catch((err) => alert("Sorry we can not find the city....."));
});
