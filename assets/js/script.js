// key f6da59a3955cc8be60230362816f2173

function getWeather() {
  var url = "https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&appid=f6da59a3955cc8be60230362816f2173";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
      .then(function (data) {
      
      }
}