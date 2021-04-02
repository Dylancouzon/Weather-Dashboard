var searchBtn = $('button');
var inputEl = $('.form-control');
var cityName = "London";
var searchHistory = JSON.parse(localStorage.getItem("search"))
if(!searchHistory){
  var searchHistory = [];
} 
// Search Function
function searchCity() {
  var cityName = inputEl.val();
  getWeather(cityName);
  searchHistory.push(cityName);
  localStorage.setItem("search",JSON.stringify(searchHistory));
}

// Fetch the API
function getWeather(cityName) {
  // key 7e3a149deb7dcf451641dcd1d05f5cd5
  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=7e3a149deb7dcf451641dcd1d05f5cd5";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
      .then(function (data) {
     console.log(data);
      });
}

searchBtn.on('click', searchCity);