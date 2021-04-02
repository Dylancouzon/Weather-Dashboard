// key 7e3a149deb7dcf451641dcd1d05f5cd5
var cityName = "London";

function getWeather() {
  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=7e3a149deb7dcf451641dcd1d05f5cd5";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
      .then(function (data) {
     console.log(data);
      });
}

getWeather();