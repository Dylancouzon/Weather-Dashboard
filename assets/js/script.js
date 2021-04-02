var searchBtn = $('button');
var inputEl = $('.form-control');
var cityName = "London";
var searchHistory = JSON.parse(localStorage.getItem("search"));
var searchHistory = searchHistory.slice(0,5);
if(!searchHistory){
  var searchHistory = [];
}else{
  generateHistory();
}

// Search Function
// execute getWeather function then add it to the search history
// Still need to check if the city really exists
function searchCity() {
  var cityName = inputEl.val();
  getWeather(cityName);
  searchHistory.unshift(cityName);
  localStorage.setItem("search",JSON.stringify(searchHistory));
  generateHistory();
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

//Generate the last 5 cities searched
//Make them clickable ?
function generateHistory(){
  $('ul').html("");
  for(i=0; i<searchHistory.length; i++){
    var historyEl = $("<li>");
    historyEl.addClass("list-group-item").text(searchHistory[i]);
    $('ul').append(historyEl)
  }
  
}
searchBtn.on('click', searchCity);